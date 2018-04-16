import React from 'react';
// import GoogleApiComponent from '../../components/GoogleApiComponent/GoogleApiComponent'; 
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map/Map'; 
import Header from '../Header/Header'; 

import { apiKey as __GAPI_KEY__ } from '../../helpers/config'; 

export class Container extends React.Component{
    render(){

        return( 
            <div className="mapLocation"  >
                <Header mainPage={ false } /> 
                <Map google={ this.props.google } />
            </div> );
    }
}

export default GoogleApiWrapper( {
    apiKey: __GAPI_KEY__
})( Container ); 

