import React from 'react';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <li key={meal.id} className="flex justify-between m-4 pb-4 border-bottom">
      <div>
        <h3 className="mt-0 mx-0 mb-1">{meal.name}</h3>
        <div className="italic">{meal.description}</div>
        <div className="mt-1 font-bold text-xl text-yellow-550">{`$${meal.price}`}</div>
      </div>
      <div>
        <form className="text-right">
          <div className="flex items-center mb-2">
            <label htmlFor={`amount-${meal.id}`} className="font-bold mr-4">
              Amount
            </label>
            <input
              id={`amount-${meal.id}`}
              type="number"
              min="1"
              max="5"
              step="1"
              value="1"
              className="w-12 rounded-md font-inherit pl-2 border border-gray-350"
            />
          </div>
          <button className="font-inherit cursor-pointer bg-yellow-750 border-none border border-yellow-750 text-white py-1 px-8 rounded-3xl font-bold hover:bg-yellow-950 transition-colors">
            + Add
          </button>
        </form>
      </div>
    </li>
  ));

  return (
    <section className="max-w-[60rem] w-[90%] my-8 mx-auto animate-appearing">
      <Card>
        <ul className="list-none m-0 p-0">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
