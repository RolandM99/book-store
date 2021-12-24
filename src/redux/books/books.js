import { createBook, removeBook, getBooks } from '../../api/addApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const RETRIEVE_BOOKS = 'bookStore/books/RETRIEVE_bOOKS';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  await createBook(book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const deleteBook = (book) => async (dispatch) => {
  await removeBook(book);
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};

export const retrieveAllBooks = () => async (dispatch) => {
  const data = await getBooks();
  const mybooks = Object.entries(data).map(([key, value]) => {
    const [booksDonnee] = value;
    return {
      item_id: key,
      ...booksDonnee,
    };
  });
  dispatch({
    type: RETRIEVE_BOOKS,
    payload: mybooks,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case RETRIEVE_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
