import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    category,
  } = props;

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
      <div id="book-page-container">
        <ul id="books-container">
          <li>
            <div className="container-1">
              <div>
                <p className="book-category">{category}</p>
              </div>
              <div>
                <p className="book-title">{title}</p>
              </div>
              <div className="commentaire">
                <div className="commentaire">Comments</div>
                <button type="submit" className="remove-btn" onClick={() => deleteBook(id)}>
                  REMOVE
                </button>
                <div className="edit-book">Edit</div>
              </div>
            </div>
            <div className="container-2">
              <div className="Oval-2">.</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

Books.propTypes = {
  title: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
};

export default Books;
