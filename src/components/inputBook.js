import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { addBook } from '../redux/books/books';

const { v4: uuid } = require('uuid');

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setBookForm] = useState('');
  const [category, setBookCategory] = useState('');

  const onChangeBook = (e) => {
    setBookForm(e.target.value);
  };

  const onChangeCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const handleBtn = (e) => {
    const handBook = {
      item_id: uuid(),
      title,
      category,
    };
    dispatch(addBook(handBook));
    e.preventDefault();
    setBookForm('');
    setBookCategory('');
  };

  return (
    <div id="form-container">
      <h3 id="form-title">ADD NEW BOOK</h3>
      <form id="add-form">
        <input
          type="text"
          id="input-book-title"
          name="title"
          placeholder="Book Title"
          value={title}
          onChange={onChangeBook}
        />
        <input
          type="text"
          id="input-book-category"
          name="author"
          placeholder="Book category"
          value={category}
          onChange={onChangeCategory}
        />

        <button id="add-btn" type="submit" onClick={handleBtn}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
