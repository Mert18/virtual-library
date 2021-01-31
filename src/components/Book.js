import React, { useState } from 'react';
import './book.css'
import Modal from './Modal.js'

const Book = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    return (
        <div className="book">
            <h2 className="title"><span>{book.bookName}</span></h2>
            <h3 className="author"><span>{book.author}</span></h3>
            <div className="characters">
                {book.characters.split(",").map((el) => {
                    return <p key={el[2]}>{el}</p>
                })}
            </div>
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
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    )
}
export default Book;