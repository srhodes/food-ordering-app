import React, { useState } from 'react';
import axios from 'axios';
import { CardBody, Card, CardImg } from 'reactstrap';


export function CalorieSearch() {
  const [calorieCount, setCalorieCount] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d7c35df411774b8abdc4c5197ab01533&maxCalories=${calorieCount}`)
      .then((response) => {
        const recipeData = response.data.results;
        setRecipes(recipeData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="text" value={calorieCount} onChange={(event) => setCalorieCount(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {
      recipes.map(
        (recipe) => 
        (
        // <Card style="width: 18rem;">
        //   <CardBody>
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{calorieCount} calories</p>
              <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} className="card-img-top" alt={recipe.title} />
              
                
              </div>
        //     </CardBody>
        // </Card>
      )
      )
      }
    </div>
  );
}
