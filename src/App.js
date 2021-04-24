import React, { useState } from 'react';
import './App.css';
import SelectList from './SelectList/SelectList';
import uuid from 'react-uuid';

const App = () => {

  const [optionList, setOptionList] = useState([
    {
      id: uuid(),
      name: "Azerbaijan",
      isSelected: false
    },
    {
      id: uuid(),
      name: "Turkey",
      isSelected: false
    },
    {
      id: uuid(),
      name: "Germany",
      isSelected: false
    },
    {
      id: uuid(),
      name: "Russia",
      isSelected: false
    },
    {
      id: uuid(),
      name: "Georgia",
      isSelected: false
    }
  ]);


  return (
    <div className="App" >
      <SelectList
        options={optionList}
        inputId="Countries"
        name="Countries-list"
      />
    </div>
  )

}

export default App;
