import React from 'react'
import bookData from "./data/cards.json"

const FlashCard = () => {
  return (
    <div>
      <h1>Favorite Books</h1>
      {bookData.cards.map((book) => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <p>Author: {book.author}</p>
          <img style={{width: 100}} src={book.img} alt={book.name} />
          <p>Pages: {book.pages}</p>
          <p>Date Published: {book.datePublished}</p>
          <p>Genres: {book.genres}</p>
          <p>Description: {book.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default FlashCard