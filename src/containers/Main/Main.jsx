import React from 'react';
import './Main.css'; 
import Header from '../Header/Header'; 
import MiddleSection from '../MiddleSection/MiddleSection'; 
import ApartmentFooter from '../ApartmentFooter/ApartmentFooter'; 

const Main = ( props ) => (
    <div className={ "mainDiv" }>
        <Header />    
        <MiddleSection />
        <ApartmentFooter /> 
    </div>
);

export default Main;