import React from 'react';

const Book = ({ book }) => {
    return (
        <div>
            <h2>{book.bookName}</h2>
            <h2>{book.author}</h2>
            <p>{book.characters}</p>
            <p>{book.thoughts}</p>
        </div>
    )
}

export default Book;