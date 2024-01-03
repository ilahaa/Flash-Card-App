import React, { useState } from 'react';

const Filter = ({ books, setFilteredBooks }) => {
  const [filteredStatus, setStatus] = useState('All');

  const handleFilter = (status) => {
    if (status === 'All') {
      setStatus(books); 
    } else {
      const filtered = books.filter((book) => book.status === status);
      setFilteredBooks(filtered); 
    }
  };

  const handleChange = (e) => {
    const status = e.target.value;
    setStatus(status);
    handleFilter(status);
  };

  return (
    <div>
      <select value={filteredStatus} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Already read">Already read</option>
        <option value="Noted">Noted</option>
        <option value="Want to Read">Want to read</option>

      </select>
    </div>
  );
};

export default Filter;
