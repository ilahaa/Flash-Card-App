import React, { useState } from 'react';
import bookData from './data/mydata.json';
import '../src/style/flashCard.css';
import EditCard from './EditCard';
import AddNewCard from './AddNewCard';

const FlashCard = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [book, setBook] = useState(bookData.cards);
  const [editCardId, setEditCardId] = useState(null);

  const handleAddNewBook = (newBook) => {
    const updatedBooks = [...book, { ...newBook, id: (book.length + 1).toString() }];
    setBook(updatedBooks);
  };

  const handleEdit = (bookId) => {
    setEditCardId(bookId);
  };

  const handleCloseEdit = () => {
    setEditCardId(null);
  };

  const handleEditBook = (updatedBook) => {
    const updatedBooks = book.map((b) => (b.id === updatedBook.id ? updatedBook : b));
    setBook(updatedBooks);
    setEditCardId(null);
  };

  const handleCardClick = (bookId) => {
    setSelectedBook((selected) => (selected === bookId ? null : bookId));
  };

  const handleDelete = (bookId) => {
    const updatedBooks = book.filter((book) => book.id !== bookId);
    setBook(updatedBooks);
  };

  
  return (
    <div className="flashCardPage m-5">
      <h1>Favorite Books</h1>
      <div className="books-container">
        {book.map((book) => (
          <div className="main-flashcard-container" key={book.id}>
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
            <div className="delete-edit-buttons">
              <i className="delete-button fa-solid fa-trash" onClick={() => handleDelete(book.id)}></i>
              <i className="edit-button fa-regular fa-pen-to-square ml-3" onClick={() => handleEdit(book.id)}></i>
            </div>
          </div>
        ))}
      </div>
      {editCardId !== null && (
        <EditCard
          book={book.find((bookItem) => bookItem.id === editCardId)}
          onClose={handleCloseEdit}
          onEdit={handleEditBook}
        />
      )}

      <div className="addNewCard">
      <AddNewCard onAdd={handleAddNewBook} />
      </div>
    </div>
  );
};

export default FlashCard;