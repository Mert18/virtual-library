import React, { useState, useEffect } from 'react';
import BookList from './components/BookList'
import './header.css'

const App = () => {

    const savedItems = JSON.parse(localStorage.getItem('bookList'));

    const [bookList, setBookList] = useState(savedItems || [
        {
            bookName: "The Joy of Life",
            author: "Emile Zola",
            characters: "Pauline, Lazare, Louise, Chanteau",
            thoughts: "Culpa velit ea nostrud sunt laborum adipisicing ad veniam irure aliqua."
        },
        {
            bookName: "The Hunchback of Notre-Dame",
            author: "Victor Hugo",
            characters: "Esmeralda, Quasimodo, ...",
            thoughts: "Qui cillum adipisicing occaecat cillum."
        },
        {
            bookName: "Sophie's World",
            author: "Jostein Gaarder",
            characters: "Sophie, ...",
            thoughts: "Sint in laboris adipisicing amet nulla eiusmod quis pariatur sit ipsum nisi ad ullamco cillum."
        },
    ]);

    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");
    const [characters, setCharacters] = useState("");
    const [thoughts, setThoughts] = useState("");

    const addBook = (book) => {
        let copy = [...bookList];
        copy = [...copy, book];
        setBookList(copy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ bookName, author, characters, thoughts });
        setBookName("");
        setAuthor("");
        setCharacters("");
        setThoughts("");
    };

    useEffect(() => {
        localStorage.setItem('bookList', JSON.stringify(bookList))
    })

    return (
        <div>
            <header>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input
                        type="text"
                        name="bookName"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        placeholder="Title"
                        className="title"
                        spellCheck="false"
                    />
                    <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Author"
                        spellCheck="false"

                    />
                    <input
                        type="text"
                        name="characters"
                        value={characters}
                        onChange={(e) => setCharacters(e.target.value)}
                        placeholder="Characters(a, b, c)"
                        spellCheck="false"

                    />

                    <input
                        type="text"
                        name="thoughts"
                        value={thoughts}
                        onChange={(e) => setThoughts(e.target.value)}
                        placeholder="Thoughts"
                        spellCheck="false"
                        className="thoughts"
                    />

                    <button>submit</button>
                </form>
            </header>
            <BookList bookList={bookList} />
        </div>
    )
}

export default App