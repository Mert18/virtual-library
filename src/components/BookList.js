import React from 'react';
import Book from './Book'
import './book.css'

const BookList = ({ bookList }) => {
    return (
        <div className="booklist">
            {bookList.map((book) => {
                return (
                    <Book book={book} />
                )
            })}
        </div>
    )
}

export default BookList