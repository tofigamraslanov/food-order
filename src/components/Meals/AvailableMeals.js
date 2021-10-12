import React, { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { IconContext } from 'react-icons/lib';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-d7315-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) throw new Error('Something went wrong!');

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className="text-center p-4 bg-white shadow-md rounded-2xl max-w-[60rem] w-[90%] my-8 mx-auto">
        <IconContext.Provider value={{ className: 'spinner' }}>
          <ImSpinner9 />
        </IconContext.Provider>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="p-4 bg-white shadow-md rounded-2xl max-w-[60rem] w-[90%] my-8 mx-auto text-center">
        <p className="text-2xl text-red-600">{httpError}</p>
      </section>
    );
  }

  return (
    <section className="max-w-[60rem] w-[90%] my-8 mx-auto animate-meals-appear">
      <Card>
        <ul className="list-none m-0 p-0">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
