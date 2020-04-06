import React, { useState } from 'react';
import axios from 'axios'

export default function Converter() {
  
  const [currencyA, setCurrencyA] = useState({
    name: 'Real',
    symbol: 'BRL',
    value: 1
    
  });
  const [currencyB, setCurrencyB] = useState({
    name: 'NZD',
    symbol: 'EUR'
  });
  const [stdCurrency, setStdCurrency] = useState({
    name: 'Dollar',
    base: 'USD'
  });
  const [date, setDate] = useState({
    day: '01',
    month: '01',
    year: '2020'
  });
  const [price, setPrice] = useState(0);

  const from_to = () =>{

  }

  let symbols = `${currencyA.symbol},${currencyB.symbol}`;
  let base = `${stdCurrency.base}`
  let date_string = `${date.year}-${date.month}-${date.day}`;
  const url = `https://api.ratesapi.io/api/${date_string}?base=${base}&symbols=${symbols}`;
  // https://api.ratesapi.io/api/2010-01-12?base=USD&symbols=BRL,EUR
  // https://api.ratesapi.io/api/2002-04-23?base=USD&symbols=EUR,BRL

  
  // const handleChange = input => e => setCurrencyA({ ...currencyA, [input]: e.target.value });
  
  axios.get(url).then(response => {
    const res = response.data;
    //const price_string = `res.rates.${currencyA.symbol}`;
    setPrice(res.rates.USD);
    console.log(res);
  });

  return (
    <div className="flex-container">
        <h1>On {date_string} {currencyA.value} {currencyA.name} was {price} {currencyB.name} </h1>
        <h2>{url}</h2>
    </div>
  );
}