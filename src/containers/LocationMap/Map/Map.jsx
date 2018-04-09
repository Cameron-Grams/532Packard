import React from 'react'; 
import ReactDOM from 'react-dom'; 

export class Map extends React.Component{

    componentDidUpdate( prevProps, prevState ){
        if ( prevProps.google !== this.props.google ){
            this.loadMap();
        }
    }

    componentDidMount(){
        this.loadMap();
    }

    loadMap(){ 
        if ( this.props && this.props.google ){
            const { google } = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode( mapRef ); 
            let zoom = 16;
            let lat = 42.272313;
            let lng = -83.742381;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
            new maps.Marker( {
                position: center,
                map: this.map,
                title: "532 Packard"
            })
        }
     }
 


    render(){
        const mapStyles = {
            width: '1500px',
            height: '800px'
        }
        return(
            <div style={ mapStyles } ref="map" >
            Loading map...
            </div>
        )
    };
};

export default Map; 