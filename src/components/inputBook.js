import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Books from './Books';
import AddBook from './addNewBook';

const BookForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookSelected = useSelector((state) => state.booksReducer);
  return (
    <>
      <div>
        {bookSelected.map((book) => (
          <Books
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default BookForm;
