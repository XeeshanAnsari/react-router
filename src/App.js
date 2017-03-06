import React, { Component } from 'react';
import {Router , Route ,browserHistory ,IndexRoute}  from 'react-router'
import './App.css';
import Home from './Home';
import About from './About'


class App extends Component {
  render() {
    return (<div>
      
      <Router history={ browserHistory }>
          <Route path="/" component={Home}>
             <Route path="/about" component={About} /> 
           </Route>
      </Router>
      </div>
    );
  }
}

export default App;
