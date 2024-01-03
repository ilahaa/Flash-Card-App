import React, { useState } from 'react';

const Search = ({ books, setFilteredBooks }) => {
  const [searchBook, setSearchBook] = useState('');

  const handleSearch = (e) => {
    const searchedBooks = books.filter(
      (book) =>
        book.name.toLowerCase().includes(e.toLowerCase()) || 
        book.author.toLowerCase().includes(e.toLowerCase()) || 
        book.genres.toLowerCase().includes(e.toLowerCase()) || 
        book.desc.toLowerCase().includes(e.toLowerCase()) 
    );
    setFilteredBooks(searchedBooks);
  };

  const handleChange = (el) => {
    const keyword = el.target.value;
    setSearchBook(keyword);
    handleSearch(keyword);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchBook}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;