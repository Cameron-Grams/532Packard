import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Apartments from '../../helpers/apartmentsFile'; 

import ReturnButton from '../../components/ReturnButton/ReturnButton';

import './TourApartment.css'; 
import TourSummary from './TourSummary';

export default class TourApartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      startTour: false,
      tourApartment: null
    };
  }

  componentWillMount(){
    const apartment = this.props.match.params.apartmentId; 
    this.setState( { tourApartment: Apartments[ apartment ] } ); 
  }

  startPhotoTour = () => {
    this.setState( { startTour: true } );
  }

  render() {
    const { photoIndex, tourApartment } = this.state;
    const images = tourApartment.apartmentImages; 
    const caption = tourApartment.details;
    const title = tourApartment.details;

    return (
      <div>
        <ReturnButton /> 

        <TourSummary clickHandler={ this.startPhotoTour } siteDetails={ tourApartment } /> 

        { this.state.startTour && <Lightbox
          mainSrc={ images[ photoIndex ] }
          nextSrc={ images[ ( photoIndex + 1 ) % images.length ] }
          prevSrc={ images[ ( photoIndex + images.length - 1 ) % images.length ] }
          onCloseRequest={() => this.setState( { photoIndex: 0, startTour: false } ) }
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
          imageTitle={ title }
          imageCaption={ caption }
        /> }

      </div>
    );
  }
}

// built using the lightbox component from: https://github.com/fritz-c/react-image-lightbox
