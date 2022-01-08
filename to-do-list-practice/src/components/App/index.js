import {useState} from 'react'
import React from 'react';
import './App.css';
import List from '../List';
import Input from '../Input';


function App() {

const [toDos, setTodos] = useState([]);

function addItem(item) {
setTodos([...toDos, item]);
}

function removeItem(index) {
setTodos([...toDos.slice(0, index), ...toDos.slice(index +1)])
}

  return <div className="App">
    <Input onSubmit={addItem} />
    <List toDos={toDos} onDelete={removeItem}/>
  
  </div>
}

export default App;
