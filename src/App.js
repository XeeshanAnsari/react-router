import React, { Component } from 'react';
import {Router , Route ,browserHistory ,IndexRoute}  from 'react-router'

import Home from './Home';
import About from './About'
import Contact from './contact'


class App extends Component {
  render() {
    return (
      <div>
        <Router history={ browserHistory }>
            <Route path="/" component={Home}>
                <IndexRoute  component={Contact} />
                
                <Route path="/about" component={About} /> 
            </Route>
        </Router>
      </div>
    );
  }
}

export default App;
