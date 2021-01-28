import React from 'react';
import Book from './Book'


const BookList = ({ bookList }) => {
    return (
        <div>
            {bookList.map((book) => {
                return (
                    <Book book={book} />
                )
            })}
        </div>
    )
}

export default BookList