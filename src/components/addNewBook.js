import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const categories = [
    {
      id: 1,
      name: 'Action',
    },
    {
      id: 2,
      name: 'Science fiction',
    },
    {
      id: 3,
      name: 'Computer Science',
    },
  ];

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const lblBookTitleChanged = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const chkCategoriesChanged = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const Submit = () => {
    const newBook = {
      id: uuidv(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle(`${title}`);
    setCategory(`${category}`);
  };

  return (
    <>
      <div className="allform-container">
        <div> ADD NEW BOOK</div>
        <form action="/" onSubmit={Submit}>
          <div>
            <div>
              <input
                type="text"
                value={title}
                placeholder="Book title"
                id="book-title"
                onChange={lblBookTitleChanged}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <select
                id="chose-category"
                placeholder="Category"
                value={category}
                onChange={chkCategoriesChanged}
                required
              >
                <option value="" disabled hidden>Category</option>
                { categories.map((items) => (
                  <option key={items.id} value={items.name}>{items.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button type="submit" value="Submit" onClick={Submit}>Add Book</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
