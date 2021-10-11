import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { ImSpinner9 } from 'react-icons/im';
import { IconContext } from 'react-icons/lib';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-d7315-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

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

    fetchMeals();
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

  return (
    <section className="max-w-[60rem] w-[90%] my-8 mx-auto animate-meals-appear">
      <Card>
        <div className="text-center">
          {isLoading && (
            <IconContext.Provider value={{ className: 'spinner' }}>
              <ImSpinner9 />
            </IconContext.Provider>
          )}
        </div>
        <ul className="list-none m-0 p-0">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
