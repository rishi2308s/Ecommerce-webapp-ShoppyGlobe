import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mb-4 p-2 border rounded"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
