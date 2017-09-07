import React from 'react';
import GoogleMapReact  from 'google-map-react';
import apiKey from '../../constants/GoogleMapsApiKey';

const AnyReactComponent = ({ text }) => <div><img src="http://s1.iconbird.com/ico/2013/1/569/w16h26138981479607mapmarker.png"/></div>;

export default class MapContainer extends React.Component {
    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: apiKey,
                    language: 'ru',
                }} 
                center={this.props.coordinate}
                defaultZoom={15}>   
                <AnyReactComponent
                    lat={this.props.coordinate.lat}
                    lng={this.props.coordinate.lng}
                    text={'Kreyser Avrora'}/>
            </GoogleMapReact >
        );
    }
}

