import React, { useState, useEffect } from 'react';
import '../header.css'

let data = require('../assets/kitaplarda.json')

const Quote = () => {

    const [quot, setQuot] = useState({
        "id": 17,
        "book": "Böyle Söyledi Zerdüşt",
        "publisher": "Türkiye İş Bankası Kültür Yayınları",
        "quote": "   Kısırsınız siz, b u  y ü z d e n inancınız da eksik. Oysa yaratmak zorunda olanın gelecekten haber veren rüyaları ve yıldız-burçları da olmuştur daima - ve inanmaya inanmıştır o! -",
        "translate": "Mustafa Tüzel"
    });

    useEffect(() => {
        const x = Math.trunc(Math.random() * data.length);
        setQuot(data[x]);
    }, [])


    return (
        <div>
            <blockquote><h2 className="quote">{quot.quote}</h2></blockquote>
            <h3 className="author">{quot.author}</h3>
            <h4 className="booki">{quot.book}</h4>
        </div>
    )
}

export default Quote