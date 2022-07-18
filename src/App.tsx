import React from 'react';
import CardsRigth from './CardsRigth';
import './App.css';
import CardsLeft from './CardsLeft';

function App() {
  return (
    <div className="container">
      
    <div className="content-left">
      <CardsLeft/>
    </div>

    <div className="content-rigth">
    <CardsRigth/>
    </div>
    
  </div>
  );
}

export default App;
