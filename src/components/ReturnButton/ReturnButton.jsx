import React from 'react';
import { Link } from 'react-router-dom';



const ReturnButton = () => (
    <div className={ "css-returnButton" } >
        <Link to={ "/" } >Return to Main</Link>
    </div>
)


export default ReturnButton;