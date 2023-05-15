import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export function IngredientSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [results2, setResultsTwo] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.spoonacular.com/food/ingredients/search?apiKey=d7c35df411774b8abdc4c5197ab01533&query=${query}`);
    // const response2 = await axios.get(`https://api.spoonacular.com/recipes/93779/information?apiKey=d7c35df411774b8abdc4c5197ab01533`)
    setResults(response.data.results);
    // setResultsTwo(response2.data.results2)
  };
  
  return (
    <div>
  
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (

        <div key={result.id}>
          {console.log(result)}

          <div class="card" style={{width: '18rem', float: 'left'}}>
            <img class="card-img-top" src={`https://spoonacular.com/recipeImages/${result.id}-556x370.jpg`} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">{result.name}</h5>
            <p class="card-text">{result.description}</p>
            <a href="#" class="btn btn-primary">Add</a>
          </div>
          
        </div>
        
          {/* <li >{result.name}<img style = {{width: 400, height: 400}} src={`https://spoonacular.com/recipeImages/${result.id}-556x370.jpg`} className="card-img-top"/>{result.description}</li> */}
          {/* <div key={result.id}> */}
          {/* <li></li> */}
          {/* </div> */}
          
        </div>
        ))}
      </ul>
      {/* <ul>
        {results2.map((result2) => (
          <li key={result2.id}>{result2.image}</li>
        ))}
      </ul> */}
    </div>
  );
}

