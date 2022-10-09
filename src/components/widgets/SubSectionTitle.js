import React from "react";
import './SubSectionTitle.css';

class SubSectionTitle extends React.Component {
    render() {
        return (
            <div className="subsection-title-div">
                <div className="subsection-title-line"></div>
                <h3 className="subsection-title-text">{this.props.text}</h3>
            </div>
        );
    }
}

export default SubSectionTitle;