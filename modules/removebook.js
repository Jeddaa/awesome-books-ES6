const removeBook = (books, bookList, displayBooks) => {
  books.forEach((book) => {
    const removebtn = document.getElementById(`close-${book.id}`);
    removebtn.addEventListener('click', () => {
      books = books.filter((item) => item.id !== book.id);
      localStorage.setItem('books', JSON.stringify(books));
      displayBooks(books, bookList);
      removeBook(books, bookList, displayBooks);
    });
  });
};
export default removeBook;
