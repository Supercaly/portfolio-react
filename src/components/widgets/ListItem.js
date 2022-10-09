import React from "react";
import Badge from "./Badge";
import './ListItem.css';

function ListItem(props) {
    let listDescription;
    let listLocation;
    if (props.description) {
        listDescription = <p className="list-item-description">props.description</p>;
    }
    if (props.location) {
        listLocation = <ul className="list-item-location">
            <li>{props.location}</li>
        </ul>;
    }

    return (<div className="list-item-div">
        <Badge text={formatDate(props.date)} />
        <div className="list-item-text">
            <h4 className="list-item-title">{props.title}</h4>
            {listDescription}
            {listLocation}
        </div>
    </div>);
}

function formatDate(dates) {
    if(Object.prototype.toString.call(dates) === '[object Array]') {
        return dates.join(' - ');
    }
    return dates;
}


export default ListItem;