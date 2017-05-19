import React from 'react';

import GoogleMap from '../components/GoogleMap';

class GoogleMapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            api_key: 'AIzaSyCED_bOJNSxsrfAyTOwmoK7YTQ0qjmk2qA',
            loading: true,
            map: {},
            marker: {}
        }

        this.createMap = this.createMap.bind(this);
    }

    createMap() {
        var latLong = {
            lat: this.state.lat,
            lng: this.state.long,
        };

        this.setState({
            map: new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: latLong
            })
        }, () => {
            this.setState({
                marker: new google.maps.Marker({
                    position: latLong,
                    map: this.state.map
                })
            });
        });
    }

    render() {
        return (
            <GoogleMap
                isLoading={this.state.loading} />
        )
    }
}

export default GoogleMapContainer;
