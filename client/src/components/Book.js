import React, { useState, useContext } from 'react';
import '../styles/main.scss'
import { Context } from './store'

const Book = ({ book }) => {
    const { state, dispatch } = useContext(Context);
    const [details, setDetails] = useState(false);

    const handleDetails = () => {
        setDetails(!details);
    }
    return (
        <div className="book" onClick={handleDetails}>
            <h2 className="book__title"><span>{book.title}</span></h2>
            <h3 className="book__author"><span>{book.author}</span></h3>
            <div className="book__characters">
                {book.characters.split(",").map((el) => {
                    return <p key={el[2]}>{el}</p>
                })}
            </div>
            {
                details ?
                    <div className="book__details">
                        <div className="book__details__date">{book.date}</div>
                        <div className="book__details__thoughts">{book.thoughts}</div>e
                    </div>
                    :
                    null
            }
        </div>
    )
}
export default Book;