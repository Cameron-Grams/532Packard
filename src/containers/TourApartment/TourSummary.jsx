import React from 'react';
import './TourApartment.css';
import Header from '../Header/Header'; 


const TourSummary = ( props ) => { 
    const { apartment, narative, apartmentImages } = props.siteDetails;

    return(
        <div> 
            <Header /> 
            <div className={ "apartmentSummary" } onClick={ props.clickHandler }  >
                <h2>Apartment { apartment }</h2>
                <p>{ narative }</p>
                <img className={ "summaryImage" } src={ apartmentImages[ 0 ] } alt={ "main of apartment" }/>
                <p>Click for Photos</p>
            </div>
        </div>
    ) 
};

export default TourSummary; 