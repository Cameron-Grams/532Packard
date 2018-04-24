import React from 'react';
import { Link } from 'react-router-dom'; 
import './Button.css'; 

const Button = ( props ) => (  
        <Link className="routingLink" to={ props.sendPath } >
            <div className={ ` myButtonClass ${ props.divStyling } ${ props.className }`  } onClick={ props.clickHandler }  >
                <span>{ props.buttonLable }</span>
            </div>
        </Link>
);

export default Button; 