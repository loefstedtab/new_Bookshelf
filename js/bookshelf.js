const Bookshelf = (books = []) => {
  this.books = books;

  this.addBook = (book) => this.books.push(book);

  this.removeBook = (book) => {
    const idx = this.books.map(b => b.title[0]).indexOf(book.title[0]);
  }
}