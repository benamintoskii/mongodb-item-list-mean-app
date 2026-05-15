const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define Mongoose Schema and Model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  imageUrl: String
});
const Item = mongoose.model('Item', itemSchema);

const startServer = async () => {
  try {
    // Start in-memory MongoDB
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
    console.log('Connected to in-memory MongoDB');

    // Seed data
    const items = [
      { name: 'Sony Alpha a7 IV', description: 'Full-frame mirrorless interchangeable lens camera.', category: 'Electronics', price: 2498, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400' },
      { name: 'Apple MacBook Pro 14"', description: 'M3 Pro chip, 18GB RAM, 512GB SSD.', category: 'Computers', price: 1999, imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400' },
      { name: 'Herman Miller Aeron', description: 'Ergonomic office chair, Size B.', category: 'Furniture', price: 1695, imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400' },
      { name: 'Sony WH-1000XM5', description: 'Wireless noise canceling headphones.', category: 'Electronics', price: 398, imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400' },
      { name: 'Keychron Q1 Pro', description: 'QMK/VIA wireless custom mechanical keyboard.', category: 'Accessories', price: 199, imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400' }
    ];

    await Item.insertMany(items);
    console.log('Seeded database with items');

    // API Route
    app.get('/api/items', async (req, res) => {
      try {
        const allItems = await Item.find();
        res.json(allItems);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
