import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Praktikum/Header';
import Week10 from './Praktikum/Week10';
import Blog from './Component/Blog'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
          <img src="https://image.freepik.com/free-vector/characters-playing-chess-business-planning-strategy-concept-businessman-businesswoman-with-chess-pieces-competition-leadership_87771-4467.jpg"/>
          <h3>Welcome to About Page</h3>
          </Route>

          <Route path="/form" component={Week10} />

          <Route path="/blog">
            <Blog/>
          </Route>

          <Route path="/">
            <img src="https://image.freepik.com/free-vector/business-man-plans-business-like-playing-game-chess-with-competitor-s-business-assistant_1150-41796.jpg"/>
            <h3>Welcome to Homepage</h3>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;