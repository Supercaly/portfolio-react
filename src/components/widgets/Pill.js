import React from "react";
import './Pill.css';

function Pill(props) {
    return <div className="pill-div">
        <h6 className="pill-text">{props.text}</h6>
        </div>;
}

export default Pill;
