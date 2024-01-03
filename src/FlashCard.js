import React, { useState, useEffect } from 'react';
import bookData from './data/mydata.json';
import '../src/style/flashCard.css';
import EditCard from './EditCard';
import AddNewCard from './AddNewCard';
import Card from './components/Card';
import Search from './components/Search';
import Filter from './components/Filter';
const FlashCard = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [book, setBook] = useState(bookData.cards);
  const [editCardId, setEditCardId] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(bookData.cards);


  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      if (response.ok) {
        const data = await response.json();
        setBook(data);
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const handleAddNewBook = async (newBook) => {
    try {
      const response = await fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        fetchBooks();
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleEdit = (bookId) => {
    setEditCardId(bookId);
  };

  const handleCloseEdit = () => {
    setEditCardId(null);
  };

  const handleEditBook = async (updatedBook) => {
    try {
      const response = await fetch(`http://localhost:3000/cards/${updatedBook.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });

      if (response.ok) {
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleCardClick = (bookId) => {
    setSelectedBook((selected) => (selected === bookId ? null : bookId));
  };

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/cards/${bookId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flashCardPage m-5" id="flashcard-section">
      <h1>Favorite Books</h1>

      <div className="search-filter">
        <Search books={bookData.cards} setFilteredBooks={setFilteredBooks} />
        <Filter books={bookData.cards} setFilteredBooks={setFilteredBooks} />
      </div>
      
      <div className="books-container">
        {filteredBooks.map((book) => (
          <Card
            key={book.id}
            book={book}
            selectedBook={selectedBook}
            handleCardClick={handleCardClick}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
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