import React from 'react';
import Button from '../../components/Button/Button'; 
import './Header.css'; 

const Header = ( props ) => {

    return(
        <div className="header" >
            <Button className={ "regularButton " } 
                divStyling={ "header-third header-leftControl"}
                buttonLable={ "All Timelines" } 
                clickHandler={ props.returnUserTImelines }
                sendPath={ '/user-timelines' } />

            <div className="header-third header-centerText">
                <h1 className="userName">{ props.user.name }</h1>
            </div>

            <Button className={ "regularButton" } 
                divStyling={ "header-rightControl"}
                buttonLable={ "Log Out" } 
                clickHandler={ props.logoutUserSession } 
                sendPath={ "/login" } />
        </div>
    )
}


export default Header; 