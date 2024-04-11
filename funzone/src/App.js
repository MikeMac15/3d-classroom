import React, { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import logo from './logo.svg';
import './App.css';
import Classroom from './scenes/Classroom';

function App() {
  const [showHeader, setShowHeader] = useState(true)

  return (
    <div className="App">
      {showHeader 
      ?
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to MikeMac's Classroom!
          </p>
          <p>Move around using <code>"WASD"</code> on the keyboard and interact by using the <code>Mouse</code></p>
          <button
            className="App-link"
            onClick={()=> setShowHeader(false)}
          >
            Go to class
          </button>
        </header>

        :
        <Classroom />
        }
    </div>
  );
}

export default App;
