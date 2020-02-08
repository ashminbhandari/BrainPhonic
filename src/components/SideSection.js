import React, {Component} from 'react';
import './SideSection.css';
import TrackComponent from './TrackComponent';

class SideSection extends Component {
    render() {
        return (
            <div>
                <ul className="nav flex-column bg-dark sideNavWidth">
                    <li className="nav-item">
                        <p><button type="button" className="btn btn-block"><i className="fa fa-plus-circle fa-lg text-white"/><h5 className="text-white">Add a track </h5></button></p>
                        <TrackComponent/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideSection;
