import renderBook from './modules/render-books.js';
import { Books } from './modules/books-collection.js';
import { DateTime } from './modules/luxon.js';

const getTime = () => {
  const time = document.getElementById('time');
  const now = DateTime.now();
  const dt = now.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  time.innerText = dt;
};
window.setInterval(getTime, 1000);

const booksData = JSON.parse(localStorage.getItem('books'));

const booksBox1 = new Books(booksData);

if (booksData !== null) {
  booksBox1.getBooks.forEach((book, index) => renderBook(book, index));
} else {
  booksBox1.setBooks([]);
}

const remove = document.querySelectorAll('.remove');
remove.forEach((item, index) => {
  item.addEventListener('click', () => {
    booksBox1.remove(index);
    localStorage.setItem('books', JSON.stringify(booksBox1.getBooks));
    window.location.reload();
  });
});

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');
const add = document.getElementById('add-book');

add.addEventListener('click', () => {
  const book = {
    id: 0,
    title: '',
    author: '',
  };
  if ((inputTitle.value !== '') && (inputAuthor.value !== '')) {
    book.id = booksBox1.getBooks.length + 1;
    book.title = inputTitle.value;
    book.author = inputAuthor.value;
    booksBox1.add(book);
    localStorage.setItem('books', JSON.stringify(booksBox1.getBooks));
  }
});

// Menu interactive
const listMn = document.getElementById('list');
const addMn = document.getElementById('add-new');
const contactMn = document.getElementById('contact');
const allBooks = document.querySelector('.all-books');
const addBook = document.querySelector('.add-book');
const contact = document.querySelector('.contact');
listMn.addEventListener('click', () => {
  allBooks.classList.remove('hidden');
  addBook.classList.add('hidden');
  contact.classList.add('hidden');
});
addMn.addEventListener('click', () => {
  allBooks.classList.add('hidden');
  addBook.classList.remove('hidden');
  contact.classList.add('hidden');
});
contactMn.addEventListener('click', () => {
  allBooks.classList.add('hidden');
  addBook.classList.add('hidden');
  contact.classList.remove('hidden');
});
