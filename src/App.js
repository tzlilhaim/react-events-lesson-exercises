import React, { Component } from 'react';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import SpotCheck2 from './components/SpotCheck2';
import SpotCheck3 from './components/Spotcheck3';
import SpotCheck5 from './components/Spotcheck5/SpotCheck5';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2/Exercise2';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  
  render() {
    const state = this.state
    return (
      <div >
        <SpotCheck1/>
        <SpotCheck2/>
        <SpotCheck3/>
        <SpotCheck5/>
        <Exercise1/>
        <Exercise2/>
      </div>
    );
  }
}

export default App;
