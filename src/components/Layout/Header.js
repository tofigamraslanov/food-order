import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 md:h-20 leading-1 bg-yellow-750 text-white flex justify-between items-center px-8 md:px-10% shadow-md z-10">
        <h1 className="text-2xl md:text-[2rem]">ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-25 z-0 overflow-hidden">
        <img
          className="w-8/7 h-full object-cover transform-img"
          src={mealsImage}
          alt="A table full of delicious food"
        />
      </div>
    </>
  );
};

export default Header;
