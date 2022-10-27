function Bookshelf(books = []) {
  this.books = books;
  this.visibleBooks = books;

  this.seed = function (data) {
    // Load in the data
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

    // Prepare and sort visible books
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
  };

  this.addBook = function (book) {
    this.books.push(book);
  };

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = function () {
    const bookList = document.querySelector(".books");
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.render());
    ul.replaceChildren(...books);
    bookList.replaceChildren(ul);
  };

  // This allows us to maintain the original list of books
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
  };

  this.sortVisibleBooks = function (sortFn) {
    this.visibleBooks.sort(sortFn);
  };
}
