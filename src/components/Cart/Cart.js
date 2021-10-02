import React, { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = props => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const handleCartItemAdd = item => {
    cartContext.addItem(item);
  };
  const handleCartItemRemove = id => {
    cartContext.removeItem(id);
  };

  const cartItems = cartContext.items.map(cartItem => (
    <CartItem
      key={cartItem.id}
      id={cartItem.id}
      name={cartItem.name}
      amount={cartItem.amount}
      price={cartItem.price}
      onAdd={handleCartItemAdd.bind(null, cartItem)}
      onRemove={handleCartItemRemove.bind(null, cartItem.id)}
    />
  ));

  return (
    <Modal onClose={props.onHideCart}>
      <ul className="list-none m-0 p-0 max-h-80 overflow-auto">{cartItems}</ul>
      <div className="flex items-center justify-between font-bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          className="cart-btn text-yellow-750 border-yellow-750"
          onClick={props.onHideCart}
        >
          Close
        </button>
        {hasItems && (
          <button className="cart-btn bg-yellow-750 text-white">Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
