import React from 'react';

import './App.css';

import Box from './components/Box';

function App() {
  return (
    <div className="App">

      {['blue', 'green', 'aliceblue'].map((color, key) => (
        <Box key={key} color={color} />
      ))}

    </div>
  );
}

export default App;
