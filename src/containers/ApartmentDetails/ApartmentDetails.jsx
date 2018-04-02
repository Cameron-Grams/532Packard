import React from 'react';
import './ApartmentDetails.css';
import Apartment from '../../components/Apartments/Apartment';

const ApartmentFooter = ( props ) => (
    <div className={ "apartmentFooter" } >
        < Apartment aptNumber={ "One" } />
        < Apartment aptNumber={ "Two" }/>
        < Apartment aptNumber={ "Three" }/>
        < Apartment aptNumber={ "Four" }/>
        < Apartment aptNumber={ "Five" }/>
    </div>
);

export default ApartmentFooter; 