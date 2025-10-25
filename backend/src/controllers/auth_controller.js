const { readDB } = require('../utils/read_database')
const { writeDB } = require('../utils/write_database')
const crypto = require('crypto');
const { sendMail } = require('../utils/mailer');

async function login(req, res) {
  const db = await readDB()
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const user = db.users?.find(u => u.email === email)
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' })
  }
  if (user.password !== password) {
    return res.status(401).json({ message: 'Incorrect email or password' })
  }

  const { password: _pw, ...safeUser } = user
  return res.status(200).json({ message: 'Login successful', user: safeUser })
}

async function register(req, res) {
  const db = await readDB();
  const { firstName, lastName, email, phone, password, role } = req.body || {};

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const exists = db.users?.some(u => u.email === email);
  if (exists) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const newUser = {
    firstName,
    lastName,
    email,
    phone,
    password,
    role
  };

  db.users = db.users || [];
  db.users.push(newUser);
  await writeDB(db);

  const { password: _pw, ...safeUser } = newUser;
  return res.status(201).json({ message: 'Register successful', user: safeUser });
}

function genCode() {
  return Math.floor(100000 + Math.random() * 900000).toString(); 
}

function nowPlusMinutes(min) {
  return Date.now() + min * 60 * 1000;
}

async function requestResetCode(req, res) {
  try {
    const db = await readDB();
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = db.users?.find(u => u.email === email);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    const code = genCode();
    const resetToken = crypto.randomBytes(16).toString('hex');
    const expiresAt = nowPlusMinutes(10); 

    user.reset = {
      code,
      resetToken,
      expiresAt,
      verified: false,
      attempts: 0,
      sentAt: Date.now()
    };

    await writeDB(db);

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

async function verifyResetCode(req, res) {
  const db = await readDB();
  const { email, code } = req.body || {};
  if (!email || !code) return res.status(400).json({ message: 'Email and code are required' });

  const user = db.users?.find(u => u.email === email);
  if (!user || !user.reset) return res.status(400).json({ message: 'No reset request found' });

  const { code: savedCode, expiresAt, resetToken } = user.reset;

  if (Date.now() > expiresAt) {
    user.reset = undefined;
    await writeDB(db);
    return res.status(410).json({ message: 'Reset code expired' });
  }

  if (code !== savedCode) {
    user.reset.attempts = (user.reset.attempts || 0) + 1;
    await writeDB(db);
    return res.status(401).json({ message: 'Invalid code' });
  }

  user.reset.verified = true;
  await writeDB(db);

  return res.status(200).json({ message: 'Code verified', resetToken });
}

async function resetPassword(req, res) {
  const db = await readDB();
  const { email, resetToken, newPassword } = req.body || {};
  if (!email || !resetToken || !newPassword) {
    return res.status(400).json({ message: 'Email, resetToken and newPassword are required' });
  }

  const user = db.users?.find(u => u.email === email);
  if (!user || !user.reset) return res.status(400).json({ message: 'No reset request found' });

  const { resetToken: savedToken, expiresAt, verified } = user.reset;

  if (!verified) return res.status(401).json({ message: 'Code not verified' });
  if (Date.now() > expiresAt) {
    user.reset = undefined;
    await writeDB(db);
    return res.status(410).json({ message: 'Reset window expired' });
  }
  if (resetToken !== savedToken) return res.status(401).json({ message: 'Invalid reset token' });

  user.password = newPassword;
  user.reset = undefined;
  await writeDB(db);

  return res.status(200).json({ message: 'Password reset successful' });
}



module.exports = { login, register, requestResetCode, verifyResetCode, resetPassword }
