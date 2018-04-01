import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main/Main'; 
import LocationMap from './components/LocationMap/LocationMap';
import Contact from './components/Contact/Contact';
import Images from './containers/Images/Images'; 

class App extends Component {
  render() {
    return (
      <Router >
        <Switch >
          <Route exact path="/" component={ Main } />      
          <Route path="/location-map" component={ LocationMap } />      
          <Route path="/contact" component={ Contact } />      
          <Route path="/images" component={ Images } />      
        </Switch>
      </Router >
    );
  }
}

export default App;
