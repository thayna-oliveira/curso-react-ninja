import React, { Component } from 'react';

import './App.css';

import Button from './components/button';
import Box from './components/box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      color: 'blue'
    }

  }

  render() {

    return (

      <div className="container">

        {['blue', 'orange', 'pink'].map((color, key) => (
          <Button key={key} handleClick={() => this.setState({ color })}>{color}</Button>
        ))}

        <Box color={this.state.color} />

      </div>
    );
  }

}

export default App;
