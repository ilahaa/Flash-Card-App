import React, { useState, useEffect } from 'react';
import bookData from './data/mydata.json';
import '../src/style/flashCard.css';
import EditCard from './EditCard';
import AddNewCard from './AddNewCard';
import Card from './components/Card';
import Search from './components/Search';
import Filter from './components/Filter';
import Sort from './components/Sort';
const FlashCard = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [book, setBook] = useState(bookData.cards);
  const [editCardId, setEditCardId] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(bookData.cards);
  const [sortedBooks, setSortedBooks] = useState(bookData.cards);

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
        setBook((prevBooks) =>
        prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
      );
      handleCloseEdit(); 
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
        setBook((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateFilteredAndSortedBooks = (books) => {
    setFilteredBooks(books);
    setSortedBooks(books);
  };

  return (
    <div className="flashCardPage m-5" id="flashcard-section">
      <h1>Favorite Books</h1>

      <div className="row mt-5 flashCardMain">
        <div className="col-4 filter-box">
          <div className="search-filter">
            <p className='filter-desc'>You can search for a book by entering any keyword related to the book.
             Additionally, you can sort the books by their publish dates.
             The books can also be filtered by their status (read, noted, want to read) and genres.
            </p>
            <Search books={bookData.cards} setFilteredBooks={updateFilteredAndSortedBooks} />
            <div><Sort books={filteredBooks} setSortedBooks={setSortedBooks} /></div>
            <div className="mt-4"><Filter books={bookData.cards} setFilteredBooks={updateFilteredAndSortedBooks} /></div>
          </div>
        </div>
        <div className="col-8">
        <div className="books-container">
            {sortedBooks.length === 0 ? (
              <p className='text-center'>No books found for the specified filters.</p>
            ) : (
              sortedBooks.map((book) => (
                <Card
                  key={book.id}
                  book={book}
                  selectedBook={selectedBook}
                  handleCardClick={handleCardClick}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))
            )}
          </div>

        </div>
      </div>



      {editCardId !== null && (
        <EditCard
          book={book.find((bookItem) => bookItem.id === editCardId)}
          onClose={handleCloseEdit}
          onEdit={handleEditBook}
        />
      )}

      <div className="addNewCard mt-4">
        <AddNewCard onAdd={handleAddNewBook} />
      </div>
    </div>
  );
};

export default FlashCard;