import React from "react";
import './Socials.css';
import FeatherIcon from 'feather-icons-react';

function Socials(props) {
    return (
        <div className="socials-list">
            <a href="." className="socials-link">
                <FeatherIcon icon='facebook' />
            </a>
            <a href="." className="socials-link">
                <FeatherIcon icon='instagram' />
            </a>
            <a href="." className="socials-link">
                <FeatherIcon icon='twitter' />
            </a>
            <a href="." className="socials-link">
                <FeatherIcon icon='linkedin' />
            </a>
            <a href="." className="socials-link">
                <FeatherIcon icon='github' />
            </a>
            <a href="." className="socials-link">
                <FeatherIcon icon='phone' />
            </a>
            <a href="." className="socials-link">
                <FeatherIcon icon='mail' />
            </a>
        </div>
    );

}

export default Socials;