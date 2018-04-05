import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import TravelButton from './travelButton'; 
import './Travel.css'; 
import ReturnButton from '../../components/returnButton';


const images = [
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/iraqTeam.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/photo2.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/warned.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/PM_Office.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/team.jpg"
];

const captions = [
    "My survey team that established the District Police Force in Al Qaim, Iraq, 2005.",
    "Cyprus 2011",
    "We warned him...",
    "Prime Minister's office in Malta.",
    "The Helmand Provincial Team, Lashkar Gah, 2010"
];

const titles = [
    "Al Anbar Police Advisers",
    "Cyprus Residency",
    "With Saddam Hussain",
    "Malta",
    "Helmand, Afghanistan"
]

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  startShow = () => {
    this.setState({ isOpen: true } );
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>

        <ReturnButton /> 
        <TravelButton clickHandler={ this.startShow } />

       
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
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
        )}
      </div>
    );
  }
}

// built using the lightbox component from: https://github.com/fritz-c/react-image-lightbox