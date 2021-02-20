import React, {useState} from 'react';
import Controller from './Controller';
import axios from 'axios';

const Finder = () => {
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState([]);

  const handleSubmit = (event) => {
    // different data based on page #
    axios.get(`/events?_page=2?q=${query}`)
      .then(({ data }) => {
        setEvents(data);
        console.log(events);
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
      <Controller events={events}/>
    </div>
  );
};

export default Finder;
