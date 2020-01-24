import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import DashBoard from './components/DashBoard';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

 

const reset = () => {
    setBalls(0);
    setStrikes(0);
  }

const ballCount = () => {
  balls === 4 ? reset() : setBalls(balls => balls + 1);
  }

const strikeCount = () => {
    strikes === 3 ? reset() : setStrikes(strikes => strikes + 1);
  }

  const foul = () => {
   strikes === 2? setStrikes(2): setStrikes(strikes => strikes+1)
}

  
  return (
    <div className='App'>
      <Display
        balls={balls}
        strikes={strikes}
      />
      <DashBoard
        balls={ballCount}
        strike={strikeCount}
        reset={reset}
        foul ={foul}
      /> 
    </div>
  );
}

export default App;
