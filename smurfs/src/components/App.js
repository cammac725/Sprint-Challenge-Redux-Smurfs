import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AddSmurf from './AddSmurf';
import SmurfList from './SmurfList';
import Header from './Header';
import './App.css';

class App extends Component {

  render() {
    return (

      <div className="App">
        <div>
          <Header />
        </div>

        <h1>SMURF VILLAGE</h1>

        <div>

          <Route exact path='/' component={SmurfList} />
          <Route path='/add' component={AddSmurf} />

        </div>
      </div>


    );
  }
}

export default App;
