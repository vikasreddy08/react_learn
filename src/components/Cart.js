import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-5 p-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-center">Cart</h1>
        <button
          className="font-bold text-xl border rounded-xl px-5 text-white bg-red-500"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>

      <div className="">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <FoodItem iteminfo={item} />)
        ) : (
          <h1 className="text-center mt-10 font-bold">Your Cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
