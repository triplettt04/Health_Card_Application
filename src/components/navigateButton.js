import React from "react";
import {
    Link
} from "react-router-dom";

function NavigateButton(props) {
    if (props.onClick) {
        return (
            <Link to={props.path} className="btn btn-primary" onClick={props.onClick}>
                {props.text}
            </Link>
        );
    }
    return (
        <Link to={props.path} className="btn btn-primary">
            {props.text}
        </Link>
    );
}

export default NavigateButton;