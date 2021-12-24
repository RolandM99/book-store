import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv } from 'uuid';
import { retrieveAllBooks } from '../redux/books/books';
// import store from '../redux/configureStore';
import BookForm from './inputBook';
import Books from './Books';

const BookList = () => {
  const dispatch = useDispatch();

  const { booksReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(retrieveAllBooks());
  }, [dispatch]);

  return (
    <div>
      {booksReducer.map((book) => (
        <Books key={book.item_id} book={book} />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
