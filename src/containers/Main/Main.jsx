import React from 'react';
import './Main.css'; 
import Header from '../Header/Header'; 
import ApartmentFooter from '../ApartmentDetails/ApartmentDetails'; 

const Main = ( props ) => (
    <div className={ "mainDiv" }>
        <Header />    
    
    
        < ApartmentFooter /> 
    </div>
);

export default Main;