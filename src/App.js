import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Survey from './components/Survey';
import Circles from './components/Circles';
import Pikachu from './components/Pikachu';
import Animation from './components/Animation';

class App extends Component {
  render() {
    return (
      <div>
        <div id="progress-bar" class="off"></div>
        <div class="pikachu-container"><img src="https://raw.githubusercontent.com/learn-co-curriculum/react-rendering-lab/master/assets/pikachu.jpg" height="100px" width="100px" id="pikachu" /></div>
        <div className="container">
          <div className="title">componentWillReceiveProps()</div>
          <Survey />
        </div>
        <div className="container">
          <div className="title">shouldComponentUpdate()</div>
          <Circles />
        </div>
        <div className="container">
          <div className="title">componentWillUpdate()</div>
          <Animation />
        </div>
        <div className="container">
          <div className="title">componentDidUpdate()</div>
          <Pikachu />
        </div>
      </div>
    );
  }
}

export default App;
