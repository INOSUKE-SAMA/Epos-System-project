import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Fetch Chicken Meals
app.get('/api/chicken-meals', async (req, res) => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    const data = await response.json();
    res.json((data.meals || []).slice(0, 5));
  } catch (error) {
    console.error('Error fetching chicken meals:', error);
    res.status(500).json({ error: 'Failed to fetch chicken meals' });
  }
});

// Fetch Seafood Meals
app.get('/api/seafood', async (req, res) => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await response.json();
    res.json((data.meals || []).slice(0, 5));
  } catch (error) {
    console.error('Error fetching seafood meals:', error);
    res.status(500).json({ error: 'Failed to fetch seafood meals' });
  }
});

// Fetch Canadian Meals
app.get('/api/canadian-food', async (req, res) => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
    const data = await response.json();
    res.json((data.meals || []).slice(0, 5));
  } catch (error) {
    console.error('Error fetching Canadian meals:', error);
    res.status(500).json({ error: 'Failed to fetch Canadian meals' });
  }
});

// Fetch Extra Meals
app.get('/api/extra-meals', async (req, res) => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();
    res.json((data.meals || []).slice(0, 5));
  } catch (error) {
    console.error('Error fetching extra meals:', error);
    res.status(500).json({ error: 'Failed to fetch extra meals' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
