import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET /products
router.get('/', async (_req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (e) { next(e); }
});

// GET /products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ message: 'Product not found' });
    res.json(prod);
  } catch (e) { next(e); }
});

export default router;
