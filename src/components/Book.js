import React, { useState } from 'react';
import './book.css'

const Book = ({ book }) => {
    return (
        <div className="book">
            <h2 className="title"><span>{book.bookName}</span></h2>
            <h3 className="author"><span>{book.author}</span></h3>
            <div className="characters">
                {book.characters.split(",").map((el) => {
                    return <p key={el[2]}>{el}</p>
                })}
            </div>
            <p className="thoughts"><span>{book.thoughts}</span></p>
        </div>
    )
}
export default Book;