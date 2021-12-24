import React from 'react';
import Proptypes from 'prop-types';

const Books = ({ title, author, deleteBook }) => (
  <li>
    <p className="book-title">{title}</p>
    <p className="book-author">{author}</p>
    <button type="submit" className="remove-btn" onClick={deleteBook}>
      REMOVE
    </button>
  </li>
);

Books.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  deleteBook: Proptypes.func.isRequired,
};

export default Books;
