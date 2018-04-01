import React from 'react';
import './ApartmentDetails.css';
import Apartment from '../../components/Apartments/Apartment';

const ApartmentFooter = ( props ) => (
    <div className={ "apartmentFooter" } >
        < Apartment />
        < Apartment />
        < Apartment />
        < Apartment />
        < Apartment />
    </div>
);

export default ApartmentFooter; 