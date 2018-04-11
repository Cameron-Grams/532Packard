import React from 'react';
import './Description.css'; 

const Description = ( props ) => (
    <div className={ "summary" } >
        <div className={ "introParagraph topParagraph" } >
            <h2>Family Owned Since 1965</h2>
        </div>
        <div  className={ "introParagraph" }>
            <p>Ideal student housing for the University of Michigan; 3 minutes walk to the Law School, 5 minutes to the Bussiness School.</p>
        </div>
        <div className={ "introParagraph" }>
            <p>Rennovated home built when America built things...five units available for only the highest qualit, most dedicated scholars...</p>
        </div>
        <div className={ "introParagraph" } >
            <p>Ann Arbor has a long and distinguished history in the culture of our country, click below for the details of the apartments.</p>
        </div>
    </div>
);

export default Description; 