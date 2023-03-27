const addBooks = (title, author, books, bookList, displayBooks, removeBook) => {
  if (title.value !== '' && author.value !== '') {
    if (books.length > 0) {
      books.push({
        title: title.value,
        author: author.value,
        id: books[books.length - 1].id + 1,
      });
      title.value = '';
      author.value = '';
    } else {
      books.push({
        title: title.value,
        author: author.value,
        id: 1,
      });
      title.value = '';
      author.value = '';
    }

    localStorage.setItem('books', JSON.stringify(books));
    displayBooks(books, bookList);
    removeBook(books);
  }
};
export default addBooks;
