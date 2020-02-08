import React, {Component} from 'react';
import Slider from '@material-ui/core/Slider';
import {withStyles} from '@material-ui/core/styles';
import { CircleSlider } from "react-circle-slider";

//Volume slider
const VolumeSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

class TrackComponent extends Component {

    constructor(props) {
        super(props);


        //Local state holds the names of the tracks for now, later we will receive this from the server
        this.state = {
            trackInfo: [
                {
                    id: 0,
                    name: 'Piano',
                    icon: 'public/piano.png',
                    volume: 0.0,
                    pan: 0.0
                },
                {
                    id: 1,
                    name: 'Organ',
                    icon: 'public/organ.png',
                    volume: 0.0,
                    pan: 0.0
                }
            ],


        };
    }

    render() {

        const populateTrackList = this.state.trackInfo.map((track) => {
            return (
                <div>
                    <div className="card">
                        <h5 className="card-header bg-info text-white">{track.name}</h5>
                        <div className="card-body bg-dark">
                            <div className="row">
                                <div className="col">
                                    <br/>
                                    <button type="button" className="btn btn-warning btn-dark">M</button>
                                    <br/>
                                    <button type="button" className="btn btn-warning btn-dark">S</button>
                                </div>
                                <div className="col">
                                    <CircleSlider knobColor={'#5DC9A3'} circleWidth={20} size={120}
                                                  tooltipSize={20} tooltipColor={'#5DC9A3'} showTooltip={true}
                                                  progressColor={null} min={-50} max={50} value = {track.pan}
                                                  onChange={(e,val) => {track.pan=val; this.forceUpdate()}}/>
                                </div>
                            </div>

                            <VolumeSlider onChange={(e,val) => {track.volume = val; this.forceUpdate()}}
                                          value={track.volume} valueLabelDisplay="auto" min={-30.0} max={6.0} aria-label="volume slider"/>


                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {populateTrackList}
            </div>
        )
    }
}

export default TrackComponent;
