const Mongoose = require('./db');
const Trip = require('./travlr')
const fs = require('fs');
const path = require('path');

// Read seed data from JSON file
const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/trips.json'), 'utf8'));

async function seedDB() {
  try {
    // Delete existing records
    await Trip.deleteMany();

    // Insert seed data
    await Trip.insertMany(trips);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close connection and exit
    await Mongoose.connection.close();
    process.exit(0);
  }
}

seedDB();