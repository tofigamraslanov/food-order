import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = props => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 leading-1 bg-brand text-white flex justify-between items-center py-0 px-10% shadow-sm z-10">
        <h1 className="font-bold text-3.5xl">ReactMeals</h1>
        <HeaderCartButton />
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
