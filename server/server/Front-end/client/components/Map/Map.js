import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../../constants/GoogleMapsApiKey';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={13}  initialCenter={{
                lat: 53.888358,
                lng: 27.544162
            }}>
                <Marker 
                    position={{lat: 54.6961521, lng: 30.5045073}}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer);
