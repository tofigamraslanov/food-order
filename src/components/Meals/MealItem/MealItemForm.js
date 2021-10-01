import React from 'react';
import Input from './../../UI/Input';

const MealItemForm = props => {
  return (
    <form className="text-right">
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          className: 'w-12 font-inherit pl-2 rounded-md custom-border',
        }}
      />
      <button className="font-inherit cursor-pointer bg-yellow-750 custom-border border-yellow-750 text-white py-1 px-8 rounded-3xl font-bold hover:bg-yellow-950 transition-colors">
        Add
      </button>
    </form>
  );
};

export default MealItemForm;
