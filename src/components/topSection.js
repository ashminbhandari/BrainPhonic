import React, {Component} from 'react';

class TopSection extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand"/>
                {/* The record, play, step forward and backward buttons */}
                <div className="row">
                    <button type="button" className="btn btn-outline-secondary"><i className="fa fa-step-backward fa-lg text-white"/></button>
                    <button type="button" className="btn btn-outline-secondary"><i className="fa fa-play fa-lg text-white"/></button>
                    <button type="button" className="btn btn-outline-secondary"><i className="fa fa-step-forward fa-lg text-white"/></button>
                    <button type="button" className="btn btn-outline-secondary"><i className="fa fa-dot-circle-o fa-lg text-danger"/></button>
                </div>
                <div>
                    <button type="button" className="btn btn-success"><i className="fa fa-save fa-lg text-dark"/></button>
                </div>
            </nav>
            </div>
        )
    }
}

export default TopSection;
