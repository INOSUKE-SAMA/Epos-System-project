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

  useEffect(() => {
    const fetchChickenMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        const limitedMeals = (data.meals || []).slice(0, 5);
        setChickenMeals(limitedMeals);
      } catch (error) {
        console.error('Error fetching chicken breast meals:', error);
      }
    };

    const fetchSeafoodMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
      
        const limitedMeals = (data.meals || []).slice(0, 5);
        setSeafoodMeals(limitedMeals);
      } catch (error) {
        console.error('Error fetching seafood meals:', error);
      }
    };

    const fetchCanadianMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        const limitedMeals = (data.meals || []).slice(0, 5);
        setCanadianMeals(limitedMeals);
      } catch (error) {
        console.error('Error fetching Canadian meals:', error);
      }
    };

    const fetchExtraMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
       
        const limitedMeals = (data.meals || []).slice(0, 5);
        setExtraMeals(limitedMeals);
      } catch (error) {
        console.error('Error fetching Extra meals:', error);
      }
    };

    fetchChickenMeals();
    fetchSeafoodMeals();
    fetchCanadianMeals();
    fetchExtraMeals();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="md:w-1/4 lg:w-1/5"/>
      <div className="flex-1 flex flex-col">
        <Header className="w-full"/>
        <div className=" flex flex-col md:flex-row p-4">
          <div className="flex-1 max-h-screen overflow-y-auto">
            <CategorySection
              title="Chicken Breast Meals"
              products={chickenMeals.map((meal) => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
              }))}
            />
            <CategorySection
              title="Seafood Meals"
              products={seafoodMeals.map((meal) => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
              }))}
            />

            <CategorySection
              title="Canadian Meals"
              products={canadianMeals.map((meal) => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
              }))}
            />

            <CategorySection
              title="Extra Meals"
              products={extraMeals.map((meal) => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
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
