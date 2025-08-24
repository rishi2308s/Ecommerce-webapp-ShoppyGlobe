import express from 'express';
import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// All cart routes require auth
router.use(auth);

// GET /cart  (optional but useful)
router.get('/', async (req, res, next) => {
  try {
    const items = await CartItem.find({ userId: req.user.id }).populate('productId');
    res.json(items);
  } catch (e) { next(e); }
});

// POST /cart  { productId, quantity }
router.post('/', async (req, res, next) => {
  try {
    const { productId, quantity = 1 } = req.body;
    if (!productId) return res.status(400).json({ message: 'productId required' });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.stock < quantity) return res.status(400).json({ message: 'Insufficient stock' });

    const existing = await CartItem.findOne({ userId: req.user.id, productId });
    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      return res.status(200).json(existing);
    }

    const item = await CartItem.create({ userId: req.user.id, productId, quantity });
    res.status(201).json(item);
  } catch (e) { next(e); }
});

// PUT /cart/:id  { quantity }
router.put('/:id', async (req, res, next) => {
  try {
    const { quantity } = req.body;
    if (!quantity || quantity < 1) return res.status(400).json({ message: 'quantity must be >= 1' });

    const item = await CartItem.findOne({ _id: req.params.id, userId: req.user.id });
    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    const product = await Product.findById(item.productId);
    if (product.stock < quantity) return res.status(400).json({ message: 'Insufficient stock' });

    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (e) { next(e); }
});

// DELETE /cart/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const removed = await CartItem.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!removed) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Removed' });
  } catch (e) { next(e); }
});

export default router;
