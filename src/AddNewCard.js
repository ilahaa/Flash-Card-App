import React, { useState } from 'react';
import "../src/style/addNewBook.css"
const AddNewCard = ({ onAdd }) => {
  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    img: '',
    pages: '',
    desc: '',
    datePublished: '',
    genres: '',
    status: 'Want to Read',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };


  const handleAdd = () => {
    onAdd(newBook);
    setNewBook({
      name: '',
      author: '',
      img: '',
      pages: '',
      desc: '',
      datePublished: '',
      genres: '',
      status: 'Want to Read',
    });
  };

  return (
    <div className="addNewCard">
      <h2>Add New Book</h2>
      <form className='newBookForm'>
          <input placeholder='Book Name' type="text" name="name" value={newBook.name} onChange={handleChange} />
          <input placeholder='Author' type="text" name="author" value={newBook.author} onChange={handleChange} />
          <input placeholder='Description' type="text" name="desc" value={newBook.desc} onChange={handleChange} />
          <input placeholder='Genres' type="text" name="genres" value={newBook.genres} onChange={handleChange} />
          <input placeholder='Pages' type="text" name="pages" value={newBook.pages} onChange={handleChange} />
          <input placeholder='Url of the image' type="text" name="img" value={newBook.img} onChange={handleChange} />
          <input placeholder='Published Date' type="text" name="datePublished" value={newBook.datePublished} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add 
        </button>
      </form>
    </div>
  );
};

export default AddNewCard;
