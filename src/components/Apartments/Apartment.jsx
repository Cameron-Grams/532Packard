import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../containers/Images/Images'; 
import './Apartment.css';

const Apartment = ( props ) => {  
    /*
    const callSlideShow = ( props ) => {
        console.log( '[ apartments ] in call to slides ', props ); 
        return(
        <Images 
            imagesForApartment={ props.imageObject.apartmentImages }
            captionDetails={ props.imageObject.details }
            titleDetails={ props.imageObject.details }
        /> 
    )};
    */
    console.log( ' [ apartment ] the props sent in: ', props );

    return(
    <div className={ "apartmentDiv"}>
        <h3>{ props.aptNumber }</h3>
        <Link to={ "/images" } >See Photos</Link>
    </div>
    );
};

export default Apartment; 