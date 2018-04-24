import React from 'react';
import './Description.css'; 

const Description = ( props ) => (
    <div className={ "summary" } >
        <div className={ "leftContentItem" } >
            <h1>Family Owned Since 1968</h1>
        </div>
        <div  className={ "leftContentItem" }>
            <h3>Ideal student housing for the University of Michigan; 3 minute walk to the Law School, 5 minutes to the Bussiness School.</h3>
        </div>
        <div className={ "leftContentItem" }>
            <h3>Rennovated home originally built in 1916; extensive oak and stone construction.</h3>
        </div>
        <div className={ "leftContentItem" }>
            <h3>Centrally located along the historic trolley line.</h3>
        </div>
        <div className={ "leftContentItem" } >
            <h3>On site parking for residents.</h3>
        </div>
    </div>
);

export default Description; 