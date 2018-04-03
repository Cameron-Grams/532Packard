import React from 'react';
import Images from '../../containers/Images/Images'; 
import './Apartment.css';

const Apartment = ( props ) => {  
    const callSlideShow = ( props ) => {
        console.log( '[ apartments ] in call to slides ', props ); 
        return(
        <Images 
            imagesForApartment={ props.imageObject.apartmentImages }
            captionDetails={ props.imageObject.details }
            titleDetails={ props.imageObject.details }
        /> 
    )};

    return(
    <div className={ "apartmentDiv"}>
        <h3>{ props.aptNumber }</h3>
        <button onClick={ () => callSlideShow( props ) } >See Photos</button>
    </div>
    );
};

export default Apartment; 