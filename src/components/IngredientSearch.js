import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
          <li key={result.id}>{result.name}<img src={result.image}/></li>
          <div key={result.name}>
            <p>{result.description}</p>
          </div>
          
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

