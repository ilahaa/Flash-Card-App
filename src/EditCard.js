import React, { useState } from 'react';
import "../src/style/editCard.css";
const EditCard = ({ book, onClose, onEdit }) => {
  const [updatedBookDetails, setUpdatedBookDetails] = useState(book);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBookDetails({
      ...updatedBookDetails,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    onEdit(updatedBookDetails);
  };

  return (
    <div className="edit-modal-overlay">
      
      <div className="edit-modal-content">

        <i className="closeBtn fa-solid fa-xmark" onClick={onClose}></i>

        <h2>Edit Book Details</h2>

        <div className="editDetails">
          <input type="text" name="name" value={updatedBookDetails.name} onChange={handleInputChange} />
          <input type="text" name="author" value={updatedBookDetails.author} onChange={handleInputChange} />
          <textarea type="text" name="name" value={updatedBookDetails.desc} onChange={handleInputChange} />
          <input type="text" name="name" value={updatedBookDetails.genres} onChange={handleInputChange} />
          <input type="text" name="name" value={updatedBookDetails.pages} onChange={handleInputChange} />
          <input type="text" name="name" value={updatedBookDetails.datePublished} onChange={handleInputChange} />
        </div>

        <button className='saveButton' onClick={handleEditClick}>Save</button>

      </div>
    </div>
  );
};

export default EditCard;
