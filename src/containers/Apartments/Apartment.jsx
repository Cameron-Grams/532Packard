import React from 'react';
import { Link } from 'react-router-dom'; 
import './Apartment.css';

const Apartment = ( props ) =>  (  
    <Link to={ `/tour/${ props.apartmentNumber }` } >
    <div className={ "apartmentDiv"}  >
        <h3>{ props.aptNumber }</h3>
    </div>
    </Link>
);

export default Apartment; 