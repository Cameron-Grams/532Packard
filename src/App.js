import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main/Main'; 
import LocationMap from './containers/LocationMap/LocationMap';
import Contact from './components/Contact/Contact';
import TourApartment from './containers/TourApartment/TourApartment'; 

class App extends Component {
  render() {
    return (
      <Router >
        <Switch >
          <Route exact path="/" component={ Main } />      
          <Route path="/location-map" component={ LocationMap } />      
          <Route path="/contact" component={ Contact } />      
          <Route path="/tour/:apartmentId" component={ TourApartment } />      
        </Switch>
      </Router >
    );
  }
}

export default App;
