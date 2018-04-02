import React from 'react';
import './Apartment.css';

const Apartment = ( props ) => (
    <div className={ "apartmentDiv"}>
        <h3>{ props.aptNumber }</h3>
    </div>
);


export default Apartment; 