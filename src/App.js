import React, { Component } from 'react';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import SpotCheck2 from './components/SpotCheck2';
import SpotCheck3 from './components/Spotcheck3';
import SpotCheck5 from './components/SpotCheck5/SpotCheck5';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2/Exercise2';
import SpotCheck4 from './components/SpotCheck4/SpotCheck4';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div >
        <div class='ex-space'>
          <h4 className='ex-title'>Spot-check 1</h4 >
          <SpotCheck1 />
        </div>
        <div class='ex-space'>
          <h4 className='ex-title'>Spot-check 2</h4 >
          <SpotCheck2 />
        </div>
        <div class='ex-space'>
          <h4 className='ex-title'>Spot-check 3</h4 >
          <SpotCheck3 />
        </div>
        <div class='ex-space'>
          <h4 className='ex-title'>Spot-check 4</h4 >
          <SpotCheck4 />
        </div>
        <div class='ex-space'>
          <h4 className='ex-title'>Spot-check 5</h4 >
          <SpotCheck5 />
        </div>
        <div class='ex-space'>
          <h4 className='ex-title'>Exercise 1</h4 >
          <Exercise1 />
        </div>

        <div class='ex-space'>
          <h4 className='ex-title'>Exercises 2-7</h4 >
          <Exercise2 />
        </div>

      </div>
    );
  }
}

export default App;
