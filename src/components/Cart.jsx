import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-2 mb-2">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

