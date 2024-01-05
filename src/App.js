import React from 'react';
import Name from './components/Name';
import product from './product'
import Price from './components/Price';
import './App.css';


const App=()=> {
  return (
    <div className="App">
      <Name name={product.name}/>
      <Price Price={product.price}/>
    </div>
  );
}

export default App;