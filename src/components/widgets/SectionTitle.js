import React from "react";
import './SectionTitle.css';

class SectionTitle extends React.Component {
    render() {
        // TODO: Fix problem with text and number margin/alignment
        return (
            <div className="section-title-div">
                <div className="section-title-line section-title-line-pre"></div>
                <div className="section-title-texts">
                    <h3 className="section-title-number">{this.format_number(this.props.number)}</h3>
                    <p className="section-title-text">{this.props.title}</p>
                </div>
                <div className="section-title-line section-title-line-post"></div>
            </div>
        );
    }

    format_number(number) {
        return String(number).padStart(2, '0') + '.';
    }
}

export default SectionTitle;