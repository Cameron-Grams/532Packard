import React from 'react';
import Button from '../../components/Button/Button'; 
import './Header.css'; 

const Header = ( props ) => {

    return(
        <div className="header" >
            <Button className={ "regularButton " } 
                divStyling={ "third leftPanel"}
                buttonLable={ "Map" } 
                sendPath={ '/location-map' } />

            <div className="third">
                <h1 className="centerPanel">532 Packard Street</h1>
            </div>

            <Button className={ "regularButton" } 
                divStyling={ "third rightPanel"}
                buttonLable={ "Contact Us" } 
                sendPath={ "/contact" } />
        </div>
    )
}


export default Header; 