import React from 'react';

const Card = props => {
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl">{props.children}</div>
  );
};

export default Card;
