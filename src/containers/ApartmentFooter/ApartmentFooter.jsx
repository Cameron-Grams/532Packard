import React from 'react';
import './ApartmentFooter.css';
import Apartment from '../Apartments/Apartment';


const ApartmentFooter = ( props ) => (
    <div className={ "overallFooter" } >
        <div className={ "apartmentFooterTitle" } ><h3>Appartments Available:</h3></div>

        <div className={ "apartmentFooterElementsFrame" } >
            < Apartment 
                typeApartment= { "apartmentDiv" }
                aptNumber={ "One" }
                apartmentNumber={ 0 }
            />

            < Apartment 
                typeApartment= { "apartmentDiv currentlyRented" }
                aptNumber={ "Two" }
                apartmentNumber={ 1 }
            />

            < Apartment 
                typeApartment= { "apartmentDiv" }
                aptNumber={ "Three" }
                apartmentNumber={ 2 }
            />

            < Apartment 
                aptNumber={ "Four" }
                typeApartment= { "apartmentDiv currentlyRented" }
                apartmentNumber={ 3 }
            />

            < Apartment 
                aptNumber={ "Five" }
                typeApartment= { "apartmentDiv" }
                apartmentNumber={ 4 }
            />
        </div>
    </div>
);

export default ApartmentFooter; 