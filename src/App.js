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
          <SpotCheck1 />
        </div>
        <div class='ex-space'>
          <SpotCheck2 />
        </div>
        <div class='ex-space'>
          <SpotCheck3 />
        </div>
        <div class='ex-space'>
          <SpotCheck4 />
        </div>
        <div class='ex-space'>
          <SpotCheck5 />
        </div>
        <div class='ex-space'>
        <Exercise1 />
        </div>

        <div class='ex-space'>

        <Exercise2 />
        </div>

      </div>
    );
  }
}

export default App;
