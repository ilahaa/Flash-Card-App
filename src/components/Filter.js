import React, { useState } from 'react';
import "../style/filter.css"
const Filter = ({ books, setFilteredBooks }) => {
  const [filteredStatus, setStatus] = useState('All');
  const [filteredGenre, setGenre] = useState('All');

  const handleFilter = () => {
    let filtered = books;

    if (filteredStatus !== 'All') {
      filtered = filtered.filter((book) => book.status === filteredStatus);
    }

    if (filteredGenre !== 'All') {
      filtered = filtered.filter((book) => book.genres.includes(filteredGenre));
    }

    setFilteredBooks(filtered);
  };

  const handleChangeStatus = (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  const handleChangeGenre = (e) => {
    const genre = e.target.value;
    setGenre(genre);
  };

  const applyFilters = () => {
    handleFilter();
  };

  const allGenres = books.reduce((genres, book) => {
    book.genres.split(',').forEach((genre) => {
      if (!genres.includes(genre.trim())) {
        genres.push(genre.trim());
      }
    });
    return genres;
  }, []);

  return (
    <div>
      <div>
        <select id="statusFilter" value={filteredStatus} onChange={handleChangeStatus}>
          <option value="All">All</option>
          <option value="Already read">Already read</option>
          <option value="Noted">Noted</option>
          <option value="Want to Read">Want to read</option>
        </select>
        <label htmlFor="statusFilter">: Filter by Status</label>
      </div>
      <div>
        <select id="genreFilter" value={filteredGenre} onChange={handleChangeGenre}>
          <option value="All">All</option>
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <label htmlFor="genreFilter">: Filter by Genre</label>
      </div>
      <button className='applyBtn' onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
