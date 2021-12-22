import React from 'react';

const Books = () => (
  <div className="main-container">
    <div>
      <ul>
        <li>
          Book 1
          <button type="button">Remove</button>
        </li>
        <li>
          Book 2
          <button type="button">Remove</button>
        </li>
        <li>
          Book 3
          <button type="button">Remove</button>
        </li>
      </ul>
    </div>

    <div className="books-form">
      <form>
        <input
          type="text"
          className="book-title"
          placeholder="Book title"
          required
        />
        <select id="category">
          <option disabled selected value>Category</option>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Computer Science</option>
        </select>
        <button type="button">Submit</button>
      </form>
    </div>
  </div>
);

export default Books;
