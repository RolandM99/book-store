import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  const deletemyBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div id="book-page-container">
      <div id="books-container">
        <li key={book.item_id}>
          <p className="book-title">{book.title}</p>
          <p className="book-category">{book.category}</p>
          <button type="submit" className="remove-btn" onClick={() => { deletemyBook(book.item_id); }}>
            REMOVE
          </button>
        </li>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: Proptypes.shape({
    item_id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    category: Proptypes.func.isRequired,
  }).isRequired,
};

export default Books;
