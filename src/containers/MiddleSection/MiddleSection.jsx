import React from 'react';
import './MiddleSection.css'; 
import Description from '../../components/Description/Description';

const MainPhoto = ( props ) => (
    <div>
        <div className={ "mainPhotoDiv" } >
            <img className={ "largeImage" } src="https://s3.amazonaws.com/532packard/picExt1.jpg" alt="overview" />
        </div>
        <div className={ "leftSide" }>
            < Description /> 
        </div>
    </div>
);

export default MainPhoto; 