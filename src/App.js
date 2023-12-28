import React from 'react';
import Name from './components/name';
import product from './product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Name name={product.name}/> 
    </div>
  );
}

export default App;