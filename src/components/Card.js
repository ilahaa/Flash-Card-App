import React from 'react';
import "../style/flashCard.css"
const Card = ({ book, selectedBook, handleCardClick, handleDelete, handleEdit }) => {
    return (
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
    );
};

export default Card;
