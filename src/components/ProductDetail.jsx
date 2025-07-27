import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <img src={product.thumbnail} className="w-80 h-80 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700 my-2">{product.description}</p>
      <p className="font-semibold">{product.price} USD</p>
    </div>
  );
};

export default ProductDetail;
