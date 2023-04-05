import React, { useState, useEffect} from 'react';
import { IngredientSearch } from './components/IngredientSearch';
import { CalorieSearch } from './components/ CalorieSearch';
import { Card } from 'reactstrap';

function App() {
  
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/api/ingredients").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      <h1>Food Ordering App</h1>
      <IngredientSearch />
      <CalorieSearch />
    </div>
  );
}

export default App;
