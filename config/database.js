const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to MongoDB using ${db.name} at ${db.host}:${db.port}`);
});