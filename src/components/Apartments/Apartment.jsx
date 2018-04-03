import React from 'react';
import Lightbox from 'react-image-lightbox'; 
import './Apartment.css';

const Apartment = ( props ) => {  
    const callSlideShow = ( props ) => (
        <Lightbox 
            imagesForApartment={ props.imageObject.apartmentImages }
            captionDetails={ props.imageObject.details }
            titleDetails={ props.imageObject.details }
        /> 
    )

    return(
    <div className={ "apartmentDiv"}>
        <h3>{ props.aptNumber }</h3>
        <button onClick={ () => callSlideShow( props ) } >See Photos</button>
    </div>
    );
};

export default Apartment; 