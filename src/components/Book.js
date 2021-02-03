import React, { useState, useContext } from 'react';
import './book.css'
import Modal from './Modal.js'
import { Context } from './store'

const Book = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const deleteModal = () => {
        dispatch({ type: 'removeBook' })
        setShowModal(!showModal)
    }
    const { state, dispatch } = useContext(Context);
    return (
        <div className="book">
            <h2 className="title"><span>{book.bookName}</span></h2>
            <h3 className="author"><span>{book.author}</span></h3>
            <div className="characters">
                {book.characters.split(",").map((el) => {
                    return <p key={el[2]}>{el}</p>
                })}
            </div>
            <div>{book.date}</div>
            <button onClick={toggleModal} className="details">DETAILS</button>
            {
                showModal ? (
                    <Modal>
                        <div className="modal">
                            <h2 className="modal-h">{book.bookName}</h2>
                            <h3 className="modal-h">{book.author}</h3>
                            <div className="characterss">
                                {book.characters.split(",").map((el) => {
                                    return <p key={el[2]}>{el}</p>
                                })}
                            </div>
                            <p className="modal-p">{book.thoughts}</p>
                            <button onClick={toggleModal} className="modal-button">CLOSE</button>
                            <button className="modal-button" onClick={deleteModal}>DELETE THE BOOK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    )
}
export default Book;