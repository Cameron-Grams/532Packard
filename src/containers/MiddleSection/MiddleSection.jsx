import React from 'react';
import { Link } from 'react-router-dom'; 
import './MiddleSection.css'; 
import Description from '../../components/Description/Description';
//import OutsideTour from './Exterior/OutsideTour'; 

const MainPhoto = ( props ) => (
    <div className={ "middleSectionDiv" } >
        <div className={ "middleLeftSection" }>
            < Description /> 
        </div>


        <div className={ "middleRightSection" } >
            <Link to={ `/outside-photos` } >
                <div className="rightSideTitle"><h3 className={ "" }>Click for exterior Photos</h3></div>
                <div className="rightSideImageFrame">
                    <img className={ "rightSideImage" } src="https://s3.amazonaws.com/532packard/picExt1.jpg" alt="overview" />
                </div>
            </Link>
        </div>
    </div>
);

export default MainPhoto; 


