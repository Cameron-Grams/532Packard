import React from 'react';
import { Link } from 'react-router-dom'; 
import './Apartment.css';

const Apartment = ( props ) =>  (  
    <div className={ `${ props.typeApartment }`}  >
      <Link to={ `/tour/${ props.apartmentNumber }` } >

        <h3>{ props.aptNumber }</h3>
      </Link>
    </div>
    
);

export default Apartment; 