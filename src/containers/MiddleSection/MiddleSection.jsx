import React from 'react';
import './MiddleSection.css'; 
import Description from '../../components/Description/Description';
import OutsideTour from './Exterior/OutsideTour'; 

const MainPhoto = ( props ) => (
    <div className={ "middleSectionDiv" } >
        <div className={ "mainPhotoDiv" } >
            <img className={ "largeImage" } src="https://s3.amazonaws.com/532packard/picExt1.jpg" alt="overview" />
            < OutsideTour /> 
        </div>
        <div className={ "leftSide" }>
            < Description /> 
        </div>
    </div>
);

export default MainPhoto; 