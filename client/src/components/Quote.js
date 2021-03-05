import React, { useState, useEffect } from 'react';
import '../styles/main.scss'


let data = require('../assets/quotes.json')

const Quote = () => {

    const [quot, setQuot] = useState({
        "quoteText": "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
        "quoteAuthor": "Michael Jordan"
    });

    useEffect(() => {
        const x = Math.trunc(Math.random() * data.length);
        setQuot(data[x]);
    }, [])


    return (
        <div className="quote">
            <h2 className="quote__text">{quot.quoteText}</h2>
            <h3 className="quote__author">{quot.quoteAuthor}</h3>
        </div>
    )
}

export default Quote