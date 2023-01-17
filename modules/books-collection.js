export default class Books {
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
