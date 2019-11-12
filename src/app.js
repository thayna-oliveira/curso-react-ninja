import React from 'react';

import './App.css';

import Button from './components/button';
import LikeButton from './components/likeButton';

function App() {
  return (
    <div className="App">

      <Button>Clique aqui</Button>
      <LikeButton/>
    </div>
  );
}

export default App;
