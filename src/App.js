import React from 'react';
import { IngredientSearch } from './components/IngredientSearch';
import { CalorieSearch } from './components/ CalorieSearch';

function App() {
  return (
    <div>
      <h1>Food Ordering App</h1>
      <IngredientSearch />
      <CalorieSearch />
    </div>
  );
}

export default App;
