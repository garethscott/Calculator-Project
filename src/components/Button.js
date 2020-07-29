import React from 'react';
import './Button.css'

export const Button = (props) => {
    return (
        <div className="button" onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}