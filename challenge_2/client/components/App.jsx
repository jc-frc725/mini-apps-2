import React, {useState, useEffect} from 'react';
import ChartDisplay from './ChartDisplay';
import axios from 'axios';

export default function App() {
  const [btcDates, setbtcDates] = useState([]);
  const [btcValues, setbtcValues] = useState([]);

  const handleClick = () => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => {
        console.log(data)
        setbtcDates(Object.keys(data.bpi))
        setbtcValues(Object.values(data.bpi))
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <ChartDisplay dates={btcDates} values={btcValues} />
      Get a historical BTC rate:
      <button onClick={handleClick}>GET</button>
      <div>Powered By CoinDesk.</div>
    </div>
  );
}