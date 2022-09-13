function Bookshelf(books = []) {
  this.books = books;
  this.visibleBooks = books;

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.removeBook = function (book) {
    // Find a book with the same title
    const idx = this.books.map((b) => b.title).indexOf(book.title);
    if (idx !== -1) {
      this.books.splice(idx, 1);
      return book;
    } else {
      return null;
    }
  };

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = function () {
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.render());
    ul.replaceChildren(...books);
    return ul;
  };

  // This allows us to maintain the original list of books
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
  };

  this.sortVisibleBooks = function (sortFn) {
    this.visibleBooks.sort(sortFn);
  };
}
