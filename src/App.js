import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [element, setElement] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      data = data.slice(0, 20);
      setElement(data);
    });
  }, [])
  return (
    <div className="App">
     {
       element.map(ph => <Photos element={ph}></Photos>)
     }
    </div>
  );
}
function Photos(props) {
  return(
    <div>
      <img src={props.element.url} alt={props.element.thumbnailUrl}/>
      <h3>{props.element.title}</h3>
    </div>
  )
}

export default App;
