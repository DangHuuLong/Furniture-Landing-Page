const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '..', '..', '..', 'frontend', 'src', 'db.json');

async function writeDB(db) {
  const json = JSON.stringify(db, null, 2);
  await fs.writeFile(DB_PATH, json, 'utf-8');
}

module.exports = { writeDB };
