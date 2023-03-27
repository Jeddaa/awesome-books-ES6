const displayBooks = (books, bookList) => {
  let finalHtml = '';
  books.forEach((book) => {
    const eachHtml = `
    <div class ="list">
        <p>${book.title} by ${book.author}</p>
        <button id="close-${book.id}"> Remove </button>
      </div>
    `;
    finalHtml += eachHtml;
  });
  bookList.innerHTML = finalHtml;
};
export default displayBooks;
