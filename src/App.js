import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main/Main'; 
import LocationMap from './containers/LocationMap/LocationMap';
import ContactForm from './containers/ContactForm/ContactForm';
import OutsidePhotos from './containers/MiddleSection/Exterior/OutsidePhotos'; 
import TourApartment from './containers/TourApartment/TourApartment'; 

class App extends Component {
  render() {
    return (
      <Router >
        <Switch >
          <Route exact path="/" component={ Main } />      
          <Route path="/location-map" component={ LocationMap } />      
          <Route path="/contact" component={ ContactForm } />      
          <Route path="/outside-photos" component={ OutsidePhotos } /> 
          <Route path="/tour/:apartmentId" component={ TourApartment } />      
        </Switch>
      </Router >
    );
  }
}

export default App;
