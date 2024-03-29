import React, { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { IngredientSearch } from './components/IngredientSearch';
// import { CalorieSearch } from './components/CalorieSearch';
import { Card, Container } from 'reactstrap';
import AppBarComponent from './components/AppBarComponent';
import CarouselComponent from './components/CarouselComponent';
// import Jumbotitle from './components/Jumbotitle';
import Breadtitle from './components/BreadTitle';

function App() {
  
  const [data, setData] = useState([{}])
  const [user, setUser] = useState([{}])

  // useEffect(() => {
  //   fetch("/api/ingredients").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log("DATA: " + data)
  //     }
  //   )
  // }, [])

  // let method = 'GET'
  // useEffect(() => {
  //   const requestOptions = {
  //     method: method,
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(user)
  //   };
    
  //   if (method === 'POST') {
  //     fetch('http://localhost:5000/login', requestOptions)
  //       .then(response => response.json())
  //       .then(user => console.log(user));
  //   } else if (method === 'GET') {
  //     fetch('http://localhost:5000/login')
  //       .then(response => response.json())
  //       .then(user => console.log(user));
  //   }
  // }, []);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1><AppBarComponent/> <div className='anim'>Food Searching App </div><hr/><Breadtitle/><Container><CarouselComponent/></Container></h1>}/>
        <Route path='/ingredient' element={ <h1> <AppBarComponent/> Ingredient Search <hr/> <Breadtitle/> <IngredientSearch /> </h1>}/>
        {/* <Route path='/calorie' element={<h1> <AppBarComponent/> Calorie Search <hr/> <Breadtitle/> <CalorieSearch /></h1>}/>   */}
        <Route path='/login' element={ <h1> <AppBarComponent/> Login <hr/> </h1>}/>
        <Route path='/register' element={ <h1> <AppBarComponent/> Register <hr/></h1>}/>
        <Route path='/data' element={
          
          
          data.map(
            (datum, i) => 
            <p key={i}>{datum}</p>
          )
          
      
      }/>
      </Routes>
    </div>
  );
}

export default App;
