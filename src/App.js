import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import './App.css';

import Home from "./components/Home";
import About from "./components/About"


class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
    <Nav />
    <Route exact path="/" component= {Home} />
    <Route path="/about" component= {About} />

    </div>
    </BrowserRouter>
  );
}
}
export default App;
