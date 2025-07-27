import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center border p-4 rounded shadow-sm">
      <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover mr-4" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

