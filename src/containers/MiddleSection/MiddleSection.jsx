import React from 'react';
import { Link } from 'react-router-dom'; 
import './MiddleSection.css'; 
import Description from '../../components/Description/Description';
//import OutsideTour from './Exterior/OutsideTour'; 

const MainPhoto = ( props ) => (
    <div className={ "middleSectionDiv" } >
        <Link to={ `/outside-photos` } >
            <div className={ "mainPhotoDiv" } >
                <h3 className={ "outsidePhotosLink" }>Click for exterior Photos</h3>
                <img className={ "largeImage" } src="https://s3.amazonaws.com/532packard/picExt1.jpg" alt="overview" />
            </div>
        </Link>

        <div className={ "leftSide" }>
            < Description /> 
        </div>
    </div>
);

export default MainPhoto; 