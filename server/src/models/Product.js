import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: '' },
    stock: { type: Number, default: 0 },
    thumbnail: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
