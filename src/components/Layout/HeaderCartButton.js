import React from 'react';
import CartIcon from './../Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <button className="cursor-pointer border-none bg-icon text-white font-bold py-3 px-12 flex justify-around items-center rounded-3xl hover:bg-hover active:bg-hover group">
      <span className="w-[1.35rem] h-[1.35rem] mr-2">
        <CartIcon />
      </span>
      <span className="">Your Cart</span>
      <span className="bg-badge py-1 px-4 rounded-3xl ml-4 font-bold group-hover:bg-badge-hover group-focus:bg-badge-hover">
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;
