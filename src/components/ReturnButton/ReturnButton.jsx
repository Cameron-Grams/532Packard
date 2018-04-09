import React from 'react';
import './ReturnButton.css';
import Button from '../Button/Button'; 

const ReturnButton = () => (
    <Button className={ "regularButton " } 
        divStyling={ "css-returnButton" }
        buttonLable={ "Return to Main" } 
        sendPath={ '/' } />

)


export default ReturnButton;