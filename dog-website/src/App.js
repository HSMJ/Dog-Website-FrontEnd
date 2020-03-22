import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

function Hi(){
  return <h1>This is the first part of my website</h1>
}


ReactDOM.render(<Hi/>, document.querySelector('#root'));
export default App;
