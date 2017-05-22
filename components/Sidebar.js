import React from 'react';

class Sidebar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sidebar">
                <h1 className="sidebar__title">Events</h1>

                <hr className="sidebar__separator"></hr>
            </div>
        )
    }
}

export default Sidebar;
