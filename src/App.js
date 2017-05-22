import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapContainer from '../containers/GoogleMapContainer';
import SidebarContainer from '../containers/SidebarContainer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            lat: 0,
            lng: 0
        }
    }

    getChildContext() {
        return {
            loading: this.state.loading
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                loading: false
            }, () => {
                this.refs.mapContainer.setMapLoc();
            });
        });
    }

    render() {
        return (
            <div>
                <GoogleMapContainer
                    ref="mapContainer"
                    lat={this.state.lat}
                    lng={this.state.lng}/>

                <SidebarContainer />
            </div>
        )
    }
}

App.childContextTypes = {
    loading: PropTypes.bool
}

export default App;
