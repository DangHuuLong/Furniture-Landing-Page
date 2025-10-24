const { readDB } = require('../utils/read_database')

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

module.exports = { login }
