import React from 'react';
import "../style/sort.css"
const Sort = ({ books, setSortedBooks }) => {
  const handleSort = (order) => {
    const sorted = [...books].sort((first, second) => {
      const firstPublished = new Date(first.datePublished).getTime();
      const secondPublished = new Date(second.datePublished).getTime();
      return order === 'oldest' ? firstPublished - secondPublished : secondPublished - firstPublished;
    });
    setSortedBooks(sorted);
  };

  return (
    <div className="sortOption">
      <button className="dropbtn">Sort by Publish Date</button>
      <div className="sort-content">
        <button onClick={() => handleSort('oldest')}>Sort by oldest</button>
        <button onClick={() => handleSort('newest')}>Sort by newest</button>
      </div>
    </div>
  );
};

export default Sort;
