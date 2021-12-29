import React from 'react';
import Proptypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    category,
    author = 'Suzanna Colins',
  } = props;

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  const circularBar = Math.round(Math.random() * 20);

  return (
    <>
      <div className="my-page">
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
                <div>
                  <p className="book-author">{author}</p>
                </div>
                <div className="commentaire">
                  <div className="comment">Comments</div>
                  <button type="submit" className="remove-btn" onClick={() => deleteBook(id)}>
                    Remove
                  </button>
                  <div className="edit-book">Edit</div>
                </div>
              </div>
              <div className="container-2">
                <div style={{ width: 75, height: 75 }}>
                  <CircularProgressbar value={Math.round((circularBar / 20) * 100)} />
                </div>
                <div className="pourcent">
                  <p className="percentageVal">
                    {Math.round((circularBar / 20) * 100)}
                    %
                  </p>
                  <p id="completed">completed</p>
                </div>
              </div>
              <div className="container-3">
                <span>CURRENT CHAPTER</span>
                <p id="my-chap">
                  Chapter
                  {' '}
                  {circularBar}
                </p>
                <button id="upd-btn" type="button">UPDATE PROGRESS</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Books.propTypes = {
  title: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
  author: Proptypes.isRequired,
};

export default Books;
