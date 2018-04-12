import React, { Component } from 'react';
import { Redirect } from 'react-router'; 
import Lightbox from 'react-image-lightbox';
import Exterior from '../../../helpers/exteriorTour'; 


import './Exterior.css'; 

export default class OutsidePhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      conductTour: true
    };
  }

  render() {
    const { photoIndex } = this.state;

    const displayOrLeave = this.state.conductTour ? 
    ( 
        <Lightbox
          mainSrc={ Exterior[ photoIndex ].exteriorImage }
          nextSrc={ Exterior[ ( photoIndex + 1 ) % Exterior.length ].exteriorImage }
          prevSrc={ Exterior[ ( photoIndex + Exterior.length - 1 ) % Exterior.length ].exteriorImage }
          onCloseRequest={() => { this.setState( { conductTour: false } ) } } 
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + Exterior.length - 1) % Exterior.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % Exterior.length,
            })
          }
          imageTitle={ Exterior[ photoIndex ].title }
          imageCaption={ Exterior[ photoIndex ].narative }
        /> 
    )
      :
    <Redirect to={ "/" } /> 

    return (
        <div>
            { displayOrLeave }
        </div>
    );
  }
}

// built using the lightbox component from: https://github.com/fritz-c/react-image-lightbox
