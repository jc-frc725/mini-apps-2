import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Finder = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    axios.get(`/events?q=${query}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => console.error(error));
    event.preventDefault();
  }

  return (
    <div>
      <h2>Find events</h2>
      <form onSubmit={handleSubmit}>
        <h4>Enter a search term:</h4>
        <input type="text" value={query} onChange={() => setQuery(event.target.value)}></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Finder;
