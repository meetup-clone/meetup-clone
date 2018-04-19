import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default class EventMap extends Component {

    shouldComponentUpdate() {
        return this.props.mapUpdate
    }

    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(x =>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
            >
                <Marker
                    position={{ lat: this.props.latitude, lng: this.props.longitude }}
                />
            </GoogleMap>
        ))
        return (
            <div className='eventMap'>
                <MapWithAMarker
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `212px` }} />}
                    mapElement={<div style={{ height: `212px` }} />}
                />
            </div>
        )
    }
}



