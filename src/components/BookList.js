import React, { useContext } from 'react';
import Book from './Book'
import './book.css'
import { Context } from './store'


const BookList = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <div className="bookList">
            {state.map((book, index) => {
                return (
                    <Book book={book} key={index} index={index} />
                )
            })}
        </div>
    )
}

export default BookList