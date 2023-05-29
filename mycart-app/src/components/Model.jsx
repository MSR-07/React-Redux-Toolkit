import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModel } from "../features/model/modelSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-10 flex items-center justify-center">
      <div className="bg-white max-w-sm rounded py-8 px-4 text-center mx-4">
        <h4 className="text-2xl capitalize">remove all items from your shopping cart?</h4>
        <div className="flex justify-around">
          <button
            type="button"
            className="rounded capitalize text-base  border border-solid py-1 px-5 text-sky-600  border-sky-600 mt-4 hover:text-white hover:bg-sky-600"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModel());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="rounded capitalize text-base border border-solid py-1 px-6 text-red-800  border-red-800 mt-4 hover:text-white hover:bg-red-800"
            onClick={() => {
              dispatch(closeModel());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
