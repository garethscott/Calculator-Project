import React from 'react';
import './ClearButton.css'

export const ClearButton = (props) => {
    return (
        <div className="clear-btn" onClick={() => props.handleClick()}>{props.children}</div>
    )
}