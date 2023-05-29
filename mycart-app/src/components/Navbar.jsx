import React from "react";
import {FaOpencart} from 'react-icons/fa'
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <div className=" bg-emerald-700 py-7 px-8">
        <div className="max-w-3xl w-ful my-0 mx-auto flex gap-x-4 justify-between items-center">
          <h3 className="font-medium capitalize text-4xl" >redux toolkit</h3>
       <div className="block relative">
            <FaOpencart size='28'/>
            <div className=" absolute top-[-9.6px] right-[-9.6px] w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
              <p className="text-white mb-0 text-xl">{amount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
