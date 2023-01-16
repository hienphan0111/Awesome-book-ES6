function updateTime() {
  const time = new Date();
  const displayTime = document.getElementById('time');
  displayTime.innerText = time;
}

window.setInterval(updateTime, 1000);

class Books {
  constructor(books) {
    this.books = books;
  }

  get getBooks() {
    return this.books;
  }

  setBooks(books) {
    this.books = books;
  }

  remove(index) {
    this.books.splice(index, 1);
  }

  add(book) {
    this.books.push(book);
  }
}

const booksEle = document.querySelector('.books');

const renderBook = (book) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  const { id, title, author } = book;
  if (id % 2 !== 0) {
    bookItem.classList.add('gray');
  }
  const html = `
    <div class="book-info">
      <p class="title">"${title}" </p>
      <p class="author">by ${author}</p>
    </div>
    <button class="remove" id=${id}>Remove</button>
  `;
  bookItem.innerHTML = html;
  booksEle.appendChild(bookItem);
};

const booksData = JSON.parse(localStorage.getItem('books'));

const booksBox1 = new Books(booksData);

if (booksData !== null) {
  booksBox1.getBooks.forEach((book) => renderBook(book));
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
