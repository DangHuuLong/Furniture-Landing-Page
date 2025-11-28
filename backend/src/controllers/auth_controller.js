// backend/src/controllers/auth_controller.js
const crypto = require('crypto');
const { sendMail } = require('../utils/mailer');
const User = require('../models/user_model'); // <-- dùng mongoose model

function genCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function nowPlusMinutes(min) {
  return Date.now() + min * 60 * 1000;
}

// ============= LOGIN =============
async function login(req, res) {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    // TODO: sau này dùng bcrypt.compare
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json({ message: 'Login successful', user: userObj });
  } catch (err) {
    console.error('login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// ============= REGISTER =============
async function register(req, res) {
  try {
    const { firstName, lastName, email, phone, password, role } = req.body || {};

    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password, // sau này hash
      role,
    });

    const userObj = newUser.toObject();
    delete userObj.password;

    return res.status(201).json({ message: 'Register successful', user: userObj });
  } catch (err) {
    console.error('register error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// ============= REQUEST RESET CODE =============
async function requestResetCode(req, res) {
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    const code = genCode();
    const resetToken = crypto.randomBytes(16).toString('hex');
    const expiresAt = new Date(nowPlusMinutes(10));

    user.reset = {
      code,
      resetToken,
      expiresAt,
      verified: false,
      attempts: 0,
      sentAt: new Date(),
    };

    await user.save();

    const subject = 'Your password reset code';
    const text = `Your verification code is ${code}. It expires in 10 minutes.`;
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Password reset</h2>
        <p>Your verification code is:</p>
        <p style="font-size:24px;font-weight:bold;letter-spacing:2px">${code}</p>
        <p>This code will expire in <b>10 minutes</b>.</p>
        <p>If you did not request this, you can ignore this email.</p>
      </div>
    `;

    await sendMail({ to: email, subject, text, html });

    return res.status(200).json({ message: 'Reset code sent to your email' });
  } catch (err) {
    console.error('requestResetCode error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// ============= VERIFY RESET CODE =============
async function verifyResetCode(req, res) {
  try {
    const { email, code } = req.body || {};
    if (!email || !code) {
      return res.status(400).json({ message: 'Email and code are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !user.reset) {
      return res.status(400).json({ message: 'No reset request found' });
    }

    const { code: savedCode, expiresAt, resetToken } = user.reset;

    if (Date.now() > new Date(expiresAt).getTime()) {
      user.reset = undefined;
      await user.save();
      return res.status(410).json({ message: 'Reset code expired' });
    }

    if (code !== savedCode) {
      user.reset.attempts = (user.reset.attempts || 0) + 1;
      await user.save();
      return res.status(401).json({ message: 'Invalid code' });
    }

    user.reset.verified = true;
    await user.save();

    return res.status(200).json({ message: 'Code verified', resetToken });
  } catch (err) {
    console.error('verifyResetCode error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// ============= RESET PASSWORD =============
async function resetPassword(req, res) {
  try {
    const { email, resetToken, newPassword } = req.body || {};
    if (!email || !resetToken || !newPassword) {
      return res.status(400).json({ message: 'Email, resetToken and newPassword are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !user.reset) {
      return res.status(400).json({ message: 'No reset request found' });
    }

    const { resetToken: savedToken, expiresAt, verified } = user.reset;

    if (!verified) {
      return res.status(401).json({ message: 'Code not verified' });
    }

    if (Date.now() > new Date(expiresAt).getTime()) {
      user.reset = undefined;
      await user.save();
      return res.status(410).json({ message: 'Reset window expired' });
    }

    if (resetToken !== savedToken) {
      return res.status(401).json({ message: 'Invalid reset token' });
    }

    user.password = newPassword; // TODO: hash bằng bcrypt
    user.reset = undefined;

    await user.save();

    return res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('resetPassword error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  login,
  register,
  requestResetCode,
  verifyResetCode,
  resetPassword,
};
