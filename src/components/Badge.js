import React from "react";
import './Badge.css';

function Badge(props) {
    return (<div className="badge-div">
        <h6 className="badge-text">{props.text}</h6>
    </div>);
}

export default Badge;