import React from 'react';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="map" id="map"></div>
        )
    }
}

export default GoogleMap;
