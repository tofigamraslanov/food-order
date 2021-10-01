import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const DUMMY_CART_ITEMS = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];

const Cart = props => {
  const cartItems = DUMMY_CART_ITEMS.map(cartItem => (
    <CartItem
      key={cartItem.id}
      id={cartItem.id}
      name={cartItem.name}
      amount={cartItem.amount}
      price={cartItem.price}
    />
  ));

  return (
    <Modal onClose={props.onHideCart}>
      <ul className="list-none m-0 p-0 max-h-80 overflow-auto">{cartItems}</ul>
      <div className="flex items-center justify-between font-bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>$52.48</span>
      </div>
      <div className="text-right">
        <button
          className="action-btn text-yellow-750 border-yellow-750"
          onClick={props.onHideCart}
        >
          Close
        </button>
        <button className="action-btn bg-yellow-750 text-white">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
