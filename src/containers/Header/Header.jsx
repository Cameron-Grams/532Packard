import React from 'react';
import Button from '../../components/Button/Button'; 
import './Header.css'; 

const Header = ( props ) => {

    const DestinationButton = props.mainPage ? 
            <Button className={ "regularButton " } 
                divStyling={ "leftPanel"}
                buttonLable={ "Map of Location" } 
                sendPath={ '/location-map' } />
            :
            <Button className={ "regularButton " } 
                divStyling={ "leftPanel"}
                buttonLable={ "Return to Main" } 
                sendPath={ '/' } />;

    return(
        <div className="header" >

            { DestinationButton }

            <div className="centerPanel">
                <h1 className={ "centerTitle" } >532 Packard Street</h1>
            </div>

            <Button className={ "regularButton" } 
                divStyling={ "rightPanel"}
                buttonLable={ "Contact Us" } 
                sendPath={ "/contact" } />
        </div>
    )
}


export default Header; 