import React, { useState } from 'react';
import axios from 'axios';

export function CalorieSearch() {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const handleSearch = () => {
    axios
      .get(`https://api.spoonacular.com/food/products/search?query=${foodName}&apiKey=d7c35df411774b8abdc4c5197ab01533`)
      .then((response) => {
        const product = response.data.products[0];
        setCalories(`${console.log(typeof product.calories)} calories`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="text" value={foodName} onChange={(event) => setFoodName(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <p>{calories}</p>
    </div>
  );
}
