import React from 'react';
import './Description.css'; 

const Description = ( props ) => (
    <div className={ "summary" } >
        <div className={ "introParagraph topParagraph" } >
            <h1>Family Owned Since 1965</h1>
        </div>
        <div  className={ "introParagraph" }>
            <h3>Ideal student housing for the University of Michigan; 3 minutes walk to the Law School, 5 minutes to the Bussiness School.</h3>
        </div>
        <div className={ "introParagraph" }>
            <h3>Rennovated home built when America built things...five units available for only the highest quality, most dedicated scholars...</h3>
        </div>
        <div className={ "introParagraph" } >
            <h3>Ann Arbor has a long and distinguished history in the culture of our country, click below for the details of the apartments.</h3>
        </div>
    </div>
);

export default Description; 