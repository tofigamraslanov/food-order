import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `cursor-pointer font-inherit font-bold border-none bg-red-850 text-white py-2.5 md:py-3 px-6 md:px-12 flex justify-around items-center rounded-2xl md:rounded-3xl hover:bg-red-950 active:bg-red-950 group ${
    btnIsHighlighted ? 'animate-bump' : ''
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items.length, items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="w-5 h-5 md:w-[1.35rem] md:h-[1.35rem] mr-2">
        <CartIcon />
      </span>
      <span className="text-sm md:text-base">Your Cart</span>
      <span className="text-sm md:text-base bg-yellow-650 py-0.5 md:py-1 px-2 md:px-4 rounded-3xl ml-4 font-bold group-hover:bg-yellow-850 group-focus:bg-yellow-850">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
