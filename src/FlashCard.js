import React, { useState } from 'react';
import bookData from './data/mydata.json';
import '../src/style/flashCard.css';

const FlashCard = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [book, setBook] = useState(bookData.cards);

  const handleCardClick = (bookId) => {
    setSelectedBook(bookId === selectedBook ? null : bookId);
  };

  const handleDelete = (bookId) => {
    const updatedBooks = book.filter((book) => book.id !== bookId);
    setBook(updatedBooks);
  };

  const updateCardStatus = (bookId, status) => {
    const updatedBookData = book.map((book) => {
      if (book.id === bookId) {
        return {
          ...book,
          status: status,
          lastModified: new Date().toLocaleString()
        };
      }
      return book;
    });
    console.log('Updated Book Data:', updatedBookData);
  };

  return (
    <div className="flashCardPage m-5">
      <h1>Favorite Books</h1>
      <div className="books-container">
        {book.map((book) => (
          <div className='main-flashcard-container' key={book.id}>
            <div
              className={`cardItem ${selectedBook === book.id ? 'is-flipped' : ''}`}
              onClick={() => handleCardClick(book.id)}
            >
              <div className="card front">
                <div className="flip-icon-container">
                  <i className="flip-icon fa-solid fa-repeat"></i>
                </div>
                <img src={book.img} alt={book.name} />
              </div>
              <div className="card back">
                <div className="flip-icon-container">
                  <i className="flip-icon fa-solid fa-repeat"></i>
                </div>
                <h3 className='bookName'>{book.name}</h3>
                <p><span>Author:</span> {book.author}</p>
                <p>{book.desc}</p>
                <p><span>Genres:</span> {book.genres}</p>
                <p><span>Page:</span> {book.pages}</p>
                <p><span>Published:</span> {book.datePublished}</p>
              </div>
            </div>
            <button className="delete-button" onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCard;
