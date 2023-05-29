import React from 'react';
import {FaChevronUp,FaChevronDown} from 'react-icons/fa'
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[auto,1fr,auto] items-center gap-6 my-6 mx-4">
      <img className="w-20 h-20 object-cover" src={img} alt={title} />
      <div className="flex items-start flex-col px-4">
        <h4 className="mb-2 font-medium tracking-widest">{title}</h4>
        <h4 className="text-gray-500">${price}</h4>
        <button
          className=" text-gray-500 tracking-normal cursor-pointer text-sm bg-transparent mt-2 border-none transition-all ease-linear duration-300 hover:text-emerald-500"
          onClick={() => {
            dispatch(removeItem(id));
          }}
           >
          remove
        </button>

      </div>
      <div>
        <button
          className="w-6 bg-transparent border-none cursor-pointer hover:text-emerald-500"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <FaChevronUp />
        </button>

        <p className="text-center my-0 py-0 text-xl mr-2">{amount}</p>
  
        <button
          className="w-6 bg-transparent border-none cursor-pointer hover:text-emerald-500"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
