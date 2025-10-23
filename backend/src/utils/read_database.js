const fs = require('fs/promises');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', '..', '..', 'frontend', 'src', 'db.json');

async function readDB() {
  const raw = await fs.readFile(DB_PATH, 'utf8');
  return JSON.parse(raw);
}

module.exports = { readDB };
