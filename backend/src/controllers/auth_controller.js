const { readDB } = require('../utils/read_database')
const { writeDB } = require('../utils/write_database')

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

module.exports = { login, register }
