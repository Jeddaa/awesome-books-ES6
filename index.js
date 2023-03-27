import addBooks from './modules/addbooks.js';
import displayBooks from './modules/displaybooks.js';
import removeBook from './modules/removebook.js';
import current from './modules/date.js';

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookList = document.querySelector('.bookList');
const form = document.querySelector('.form');
const list = document.querySelector('.books');
const cont = document.querySelector('.contact');
const date = document.querySelector('.datee');

const books = [];

addBooks(title, author, books, bookList, displayBooks, removeBook);
displayBooks(books, bookList);
removeBook(books, bookList, displayBooks);

const savedBooks = localStorage.getItem('books');

if (savedBooks) {
  books.push(...JSON.parse(savedBooks));
  displayBooks(books, bookList);
  removeBook(books, bookList, displayBooks);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBooks(title, author, books, bookList, displayBooks, removeBook);
});
const datee = current();
date.innerHTML = datee;
const formNav = document.querySelector('.form-menu');
const listNav = document.querySelector('.list-menu');
const contactNav = document.querySelector('.contact-menu');

formNav.addEventListener('click', () => {
  form.classList.add('active');
  list.classList.remove('active');
  cont.classList.remove('active');
  formNav.classList.add('test');
  contactNav.classList.remove('test');
  listNav.classList.remove('test');
});

listNav.addEventListener('click', () => {
  list.classList.add('active');
  form.classList.remove('active');
  cont.classList.remove('active');
  listNav.classList.add('test');
  contactNav.classList.remove('test');
  formNav.classList.remove('test');
});

contactNav.addEventListener('click', () => {
  cont.classList.add('active');
  list.classList.remove('active');
  form.classList.remove('active');
  contactNav.classList.add('test');
  formNav.classList.remove('test');
  listNav.classList.remove('test');
});
