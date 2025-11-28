const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function connectMongo() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

module.exports = { connectMongo };
