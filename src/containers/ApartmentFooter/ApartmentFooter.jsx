import React from 'react';
import './ApartmentFooter.css';
import Apartment from '../Apartments/Apartment';


const ApartmentFooter = ( props ) => (
    <div className={ "apartmentFooter" } >
        < Apartment aptNumber={ "One" }
            apartmentNumber={ 0 }
        />

        < Apartment aptNumber={ "Two" }
            apartmentNumber={ 1 }
        />

        < Apartment aptNumber={ "Three" }
            apartmentNumber={ 2 }
        />

        < Apartment aptNumber={ "Four" }
            apartmentNumber={ 3 }
        />

        < Apartment aptNumber={ "Five" }
            apartmentNumber={ 4 }
        />
    </div>
);

export default ApartmentFooter; 