import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/productRoutes.js';
import cartRoutes from './src/routes/cartRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import { notFound, errorHandler } from './src/middleware/error.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

await connectDB();

app.get('/', (req, res) => res.json({ ok: true, service: 'ShoppyGlobe API' }));

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', authRoutes); // /register, /login

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
