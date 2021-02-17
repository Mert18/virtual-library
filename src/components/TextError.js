import React from 'react';
import '../styles/main.scss'


const TextError = (props) => {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError