import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import CurrentOrder from './components/CurrentOrder';

const App = () => {
  const [chickenMeals, setChickenMeals] = useState([]);
  const [seafoodMeals, setSeafoodMeals] = useState([]);
  const [canadianMeals, setCanadianMeals] = useState([]);
  const [extraMeals, setExtraMeals] = useState([]);

  const fetchMeals = async (endpoint, setState) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error(`Error fetching ${endpoint} meals:`, error);
    }
  };

  useEffect(() => {
    fetchMeals('chicken-meals', setChickenMeals);
    fetchMeals('seafood', setSeafoodMeals);
    fetchMeals('canadian-food', setCanadianMeals);
    fetchMeals('extra-meals', setExtraMeals);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="md:w-1/4 lg:w-1/5" />
      <div className="flex-1 flex flex-col">
        <Header className="w-full" />
        <div className="flex flex-col md:flex-row p-4">
          <div className="flex-1 max-h-screen overflow-y-auto">
            <CategorySection
              title="Chicken Meals"
              products={chickenMeals.map((meal) => ({
                id: meal.idMeal || 'N/A',
                name: meal.strMeal || 'Unknown Meal',
                image: meal.strMealThumb || 'placeholder-image-url',
              }))}
            />
            <CategorySection
              title="Seafood Meals"
              products={seafoodMeals.map((meal) => ({
                id: meal.idMeal || 'N/A',
                name: meal.strMeal || 'Unknown Meal',
                image: meal.strMealThumb || 'placeholder-image-url',
              }))}
            />
            <CategorySection
              title="Canadian Meals"
              products={canadianMeals.map((meal) => ({
                id: meal.idMeal || 'N/A',
                name: meal.strMeal || 'Unknown Meal',
                image: meal.strMealThumb || 'placeholder-image-url',
              }))}
            />
            <CategorySection
              title="Extra Meals"
              products={extraMeals.map((meal) => ({
                id: meal.idMeal || 'N/A',
                name: meal.strMeal || 'Unknown Meal',
                image: meal.strMealThumb || 'placeholder-image-url',
              }))}
            />
          </div>
          <div className="ml-6">
            <CurrentOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
