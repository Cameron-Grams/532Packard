import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './Images.css'; 

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
    };
  }

  render() {
    const { photoIndex } = this.state;

    const images = this.props.imagesForApartment; 
    const captions = this.props.captionDetails;
    const titles = this.props.titleDetails;
 
    console.log( '[ images ] details passed in as prop: ', this.props ); 

    return (
      <div>
       
        <Lightbox
          mainSrc={ images[ photoIndex ] }
          nextSrc={ images[ ( photoIndex + 1 ) % images.length ] }
          prevSrc={ images[ ( photoIndex + images.length - 1 ) % images.length ] }
          onCloseRequest={() => this.setState( { photoIndex: 0 } ) }
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
          imageTitle={ titles[ photoIndex ] }
          imageCaption={ captions[ photoIndex ] }
        />
      </div>
    );
  }
}

// built using the lightbox component from: https://github.com/fritz-c/react-image-lightbox
