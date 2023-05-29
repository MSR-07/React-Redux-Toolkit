import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModel } from "../features/model/modelSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <div className="h-screen w-full mt-10 mx-auto py-4 px-0 max-w-3xl ">
        <h1 className="mb-8 text-5xl font-semibold capitalize text-center ">
          your bag
        </h1>
        <h4 className="lowercase text-gray-400 mt-4 text-center">
          is currently empty
        </h4>
      </div>
    );
  }

  return (
    <div className="h-screen w-full mt-10 mx-auto py-4 px-0 max-w-3xl ">
      <h1 className="mb-8 text-5xl font-semibold capitalize text-center ">
        your bag
      </h1>

      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="mt-16 text-center px-4">
        <hr className="bg-gray-400 border-transparent border-1" />
        <div className="flex flex-col">
          <h4 className="capitalize text-base flex justify-between mt-4 text-gray-400">
            total <span>${total.toFixed(2)}</span>
          </h4>
          <button
            className="rounded capitalize text-base border self-center items-center border-solid py-2 px-16 max-w-max text-red-800  border-red-800 mt-4 hover:text-white hover:bg-red-800"
            onClick={() => dispatch(openModel())}
          >
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartContainer;
