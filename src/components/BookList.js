import React from 'react';
import Book from './Book'
import './book.css'

const BookList = ({ bookList, removeBook }) => {
    return (
        <div className="booklist">
            {bookList.map((book, index) => {
                return (
                    <Book book={book} key={index} index={index} />
                )
            })}
        </div>
    )
}

export default BookList