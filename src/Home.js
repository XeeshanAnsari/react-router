import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div>
          <h2>Home</h2>
          {this.props.children}
      </div> 
    );
  }
}
export default Home