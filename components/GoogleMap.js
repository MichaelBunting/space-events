import React from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className={"map-loader" + (this.context.loading ? '' : ' out')}>
                    <div className="map-loader__content">
                        Loading Location

                        <div className="map-loader__square-container">
                            {[...Array(7)].map((num, i) => {
                                return <div className="map-loader__square" key={i}></div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="map" id="map"></div>
            </div>
        )
    }
}

GoogleMap.contextTypes = {
    loading: PropTypes.bool
}

export default GoogleMap;
