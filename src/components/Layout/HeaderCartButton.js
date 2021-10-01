import React from 'react';
import CartIcon from './../Cart/CartIcon';

const HeaderCartButton = props => {
  return (
    <button
      className="cursor-pointer font-inherit font-bold border-none bg-red-850 text-white py-3 px-12 flex justify-around items-center rounded-3xl hover:bg-red-950 active:bg-red-950 group"
      onClick={props.onClick}
    >
      <span className="w-[1.35rem] h-[1.35rem] mr-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-yellow-650 py-1 px-4 rounded-3xl ml-4 font-bold group-hover:bg-yellow-850 group-focus:bg-yellow-850">
        0
      </span>
    </button>
  );
};

export default HeaderCartButton;
