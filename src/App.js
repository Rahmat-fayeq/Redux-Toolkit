import React from 'react';
import './App.css';
import Canvas from './features/canvas/Canvas';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
     <Canvas/>
     <Counter/>
    </div>
  );
}

export default App;
