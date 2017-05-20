import React from 'react';

import GoogleMap from '../components/GoogleMap';

class GoogleMapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            api_key: 'AIzaSyCED_bOJNSxsrfAyTOwmoK7YTQ0qjmk2qA',
            map: {},
            marker: {}
        }

        this.setMapLoc = this.setMapLoc.bind(this);
    }

    setMapLoc() {
        var latLong = {
            lat: this.props.lat,
            lng: this.props.lng,
        };

        this.setState({
            marker: new google.maps.Marker({
                position: latLong,
                map: this.state.map
            })
        });

        this.state.map.setCenter(latLong);
    }

    componentDidMount() {
        this.setState({
            map: new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: {
                    lat: 37.7749,
                    lng: -122.4194
                }
            })
        });
    }

    render() {
        return (
            <GoogleMap />
        )
    }
}

export default GoogleMapContainer;
