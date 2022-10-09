import React from "react";
import './Card.css';

function Card(props) {
    return (
        <div className="card-div-outer">
            <div className="card-div">
                <div className="card-image-div"></div>
                <div className="card-content">
                    <h4 className="card-title">Title</h4>
                    <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo habitant feugiat mollis pretium vel et in.</p>
                    <div className="card-icons">
                        <p className="card-icons-item">item1</p>
                        <p className="card-icons-item">item2</p>
                        <p className="card-icons-item">item3</p>
                    </div>
                </div>
            </div>
        </div>);
}

export default Card;