import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  }
];

class App extends Component {
  render() {
    const helloWorld = 'Welcome absa';
    return (
      <div className="App">
      {list.map(function(item) {
        return <div> {item.title} </div>;
      })}
      </div>
    );
  } 
}

export default App;