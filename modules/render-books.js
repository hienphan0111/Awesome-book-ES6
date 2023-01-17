const booksEle = document.querySelector('.books');

const renderBook = (book, index) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  const { id, title, author } = book;
  if (index % 2 !== 0) {
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

export default renderBook;
