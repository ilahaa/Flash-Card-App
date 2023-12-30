import React, { useState } from 'react';
import bookData from './data/mydata.json';
import '../src/style/flashCard.css';

const FlashCard = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (bookId) => {
    setSelectedBook(bookId === selectedBook ? null : bookId);
  };

  return (
    <div className="flashCardPage m-5">
      <h1>Favorite Books</h1>
      <div className="books-container">
        {bookData.cards.map((book) => (
          <div
            key={book.id}
            className={`cardItem ${selectedBook === book.id ? 'is-flipped' : ''}`}
            onClick={() => handleCardClick(book.id)}
          >
            <div className="card front">
              <img src={book.img} alt={book.name} />
            </div>
            <div className="card back">
              <h3>{book.name}</h3>
              <p>Author: {book.author}</p>
              <p>{book.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCard;
