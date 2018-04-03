import React from 'react';
import './ApartmentDetails.css';
import Apartment from '../../components/Apartments/Apartment';
import Images from '../../helpers/imageFile'; 

const ApartmentFooter = ( props ) => (
    <div className={ "apartmentFooter" } >
        < Apartment aptNumber={ "One" }
            imageObject={ Images[ 0 ] }
        />

        < Apartment aptNumber={ "Two" }
            imageObject={ Images[ 1 ] }
        />

        < Apartment aptNumber={ "Three" }
            imageObject={ Images[ 2 ] }
        />

        < Apartment aptNumber={ "Four" }
            imageObject={ Images[ 3 ] }
        />

        < Apartment aptNumber={ "Five" }
            imageObject={ Images[ 4 ] }
        />
    </div>
);

export default ApartmentFooter; 