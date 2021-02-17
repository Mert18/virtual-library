import React, { useContext } from 'react';
import Book from './Book'
import { Context } from './store'
import '../styles/main.scss'



const BookList = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <div className="booklist">
            {state.map((book, index) => {
                return (
                    <Book book={book} key={index} index={index} />
                )
            })}
        </div>
    )
}

export default BookList