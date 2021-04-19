import React, { Component, useState } from 'react';
import './App.css';
import Country from "./Country/Country"
import JsonData from "./Country/DumpCountries.json";

const App = () => {

  const [SearchInput, SetSearchInput] = useState('');

  return (
    <div className="App" >

      <input type="search" placeholder="Search Country" onChange={event => SetSearchInput(event.target.value)} />

      {JsonData.countries.filter((val) => {
        if (SearchInput == "") {
          return val;
        }
        else if (val.name.toLowerCase().includes(SearchInput.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return <Country name={val.name} key={key} />
      })}


    </div>
  )

}

export default App;
