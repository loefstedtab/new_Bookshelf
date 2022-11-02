/**
 * Bookshelf is an internal data structure
 * that manages Books.
 * @param {HTMLElement} htmlElement the element to render to
 * @param {Book[]} books an optional array of Books
 */
function Bookshelf(htmlElement, books = [], comments = []) {
  this.books = books;
  this.htmlElement = htmlElement;
  this.visibleBooks = books;
  this.comments = comments;

  /**
   * Process an array of raw book information
   * to initialize Bookshelf properties
   * @param {{author: string[], language: string, subject: string[], title: string[]}} data an array of book data
   */
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

    this.render();
  };

  /**
   * Add a book to the Bookshelf
   * @param {Book} book
   */
  this.addBook = function (book) {
    this.books.push(book);
  };

  this.addComment = function (comment) {
    this.comments.push(comment);
  };

  /**
   * Use internal Book array to rerender the
   * existing DOM element for this Bookshelf.
   */
  this.render = function () {
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => {
      let bookHTML = b.render();

      let commentText = bookHTML.querySelector(".commentText");
      let userComment = bookHTML.querySelector(".userComment");
      let newComment = document.createElement("div");
      newComment.textContent = `${this.comments}`;

      let sendButton = bookHTML.querySelector(".send");
      sendButton.addEventListener("click", () => {
        this.addComment(userComment.value);

        newComment.textContent = this.comments;

        userComment.value = '';

        console.log("comment button");
        return this.comments;
      });

      commentText.append(newComment);
      return bookHTML;
    });
    ul.replaceChildren(...books);
    this.htmlElement.replaceChildren(ul);
  };

  /**
   * @returns the number of favorite books
   */
  this.countFavoriteBooks = function () {
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  };

  /**
   * Filter visible books according to a given criteria function
   * @param {(book: Book) => boolean} criteria
   */
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  };

  /**
   * Sort visible books according to a given compare function
   * @param {(a: Book, b: Book) => number} compareFn
   */
  this.sortVisibleBooks = function (compareFn) {
    this.visibleBooks.sort(compareFn);
    this.render();
  };
}
