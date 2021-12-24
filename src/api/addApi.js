const getUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ph8zXbF5wn34KcjWkIqO/books';

export const createBook = async (book) => {
  const myBook = await fetch(getUrl, {
    method: 'POST',
    headers: {
      'Content-types': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  });
  return myBook.status === 201;
};

export const removeBook = async (bookId) => {
  const result = await fetch(`${getUrl}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  });
  return result === 'The Book was Deleted';
};

export const getBooks = async () => {
  const rep = await fetch(getUrl);
  const books = await rep.json();
  return books;
};

export default { createBook, removeBook, getBooks };
