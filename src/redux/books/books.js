import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const getUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ph8zXbF5wn34KcjWkIqO/books/';

const initialState = [];

export const addBook = ({ id, title, category }) => async (dispatch) => {
  const input = await axios.post(getUrl, {
    item_id: id,
    title,
    category,
  });
  if (input.data === 'created') {
    dispatch({
      type: ADD_BOOK,
      book: { id, title, category },
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const result = await axios.delete(`${getUrl}${id}`, {
    headers: {
      'content-type': 'application/json',
    },
  });
  const deleteItem = await result.data;
  if (deleteItem) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const getBooks = () => async (dispatch) => {
  const result = await axios.get(getUrl);
  const mybook = result.data;
  const allData = Object.entries(mybook);
  const retrieveBooks = [];
  allData.forEach(([key, book]) => {
    const id = key;
    const { title, category } = book[0];
    retrieveBooks.push({ id, title, category });
  });

  dispatch({
    type: GET_BOOKS,
    retrieveBooks,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.retrieveBooks];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
