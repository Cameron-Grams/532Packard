import React from 'react';
import { Link } from 'react-router-dom'; 
import './Exterior.css'; 

const OutsideTour = ( props ) => (
    <Link to={ `/outside-photos` } >
    <div className={ "outsidePhotosLink"}  >
        <h3>Click for exterior Photos</h3>
    </div>
    </Link>

)

export default OutsideTour; 