import React from "react";
import {connect} from 'react-redux';
import {stateMapper} from '../store.js';

class DisplayComponent extends React.Component {
    render() {
        return (
            <h2>
                Result:{this.props.result}
            </h2>
        )
    }
}

let Display = connect(stateMapper)(DisplayComponent);

export default Display;