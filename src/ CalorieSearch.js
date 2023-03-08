import React, { useState } from 'react';
import axios from 'axios';

export function CalorieSearch() {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const handleSearch = () => {
    axios
      .get(`https://api.spoonacular.com/food/products/upc/${foodName}?apiKey=d7c35df411774b8abdc4c5197ab01533`)
      .then((response) => {
        const products = response.data.products;
        if (products.length > 0) {
          const product = products[0];
          if (product.calories) {
            setCalories(`${product.calories} calories`);
          } else {
            setCalories('Calorie information not available');
          }
        } else {
          setCalories('Product not found');
        }
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
