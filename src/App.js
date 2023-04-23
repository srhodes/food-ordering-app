import React, { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { IngredientSearch } from './components/IngredientSearch';
import { CalorieSearch } from './components/ CalorieSearch';
import { Card } from 'reactstrap';

function App() {
  
  const [data, setData] = useState([{}])
  const [user, setUser] = useState([{}])

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

  let method = ''
  useEffect(() => {
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
    if (method === 'POST') {
      fetch('/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    } else if (method === 'GET') {
      fetch('/login')
        .then(response => response.json())
        .then(data => console.log(data));
    }
  }, []);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={ <h1> Food Ordering App   </h1>}/>
        <Route path='ingredient' element={ <h1>Ingredient Search <hr/> <IngredientSearch /> </h1>}/>
        <Route path='calorie' element={<h1> Calorie Search <hr/> <CalorieSearch /></h1>}/>  
      </Routes>
    </div>
  );
}

export default App;
