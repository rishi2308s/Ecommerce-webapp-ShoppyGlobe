import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover mb-3 rounded"
      />
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <div className="flex-grow" />

      <div className="mt-2 flex justify-between items-center">
        <button
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
          onClick={() => {
            console.log('Clicked', product);
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 text-sm underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
