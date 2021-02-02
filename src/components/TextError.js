import React from 'react';
import '../header.css'

const TextError = (props) => {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError