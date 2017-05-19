import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapContainer from '../containers/GoogleMapContainer';

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
                long: position.coords.longitude,
                loading: false
            }, () => {
                this.createMap();
            });
        });
    }

    render() {
        return (
            <div>
                <GoogleMapContainer
                    lat={this.state.lat}
                    lng={this.state.lng}/>
            </div>
        )
    }
}

App.childContextTypes = {
    loading: PropTypes.bool
}

export default App;
