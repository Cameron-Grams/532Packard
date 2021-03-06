import React from 'react';
import './Main.css'; 
import Header from '../Header/Header'; 
import MiddleSection from '../MiddleSection/MiddleSection'; 
import ApartmentFooter from '../ApartmentFooter/ApartmentFooter'; 

const spaceDiv = (
    <div className="additionalSpaceDiv"></div>
);

const largeDisplayTopMargin = (
    <div className="largeDisplayTopMarginDiv" ></div>
);

const Main = ( props ) => (
    <div>
        { largeDisplayTopMargin }
        <div className={ "mainDiv" }>
            <Header mainPage={ true } />    
            <MiddleSection />
            { spaceDiv }
            <ApartmentFooter /> 
        </div>
    </div>
);

export default Main;