/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
function Book(authors, language, subject, title) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;

  /**
   * @returns a list item representing this Book
   */
  this.render = function () {
    const eachBook = document.createElement("section");
    //Create a header element which contains the title of the book and the favorite button
    const bookHeader = document.createElement("section");
    bookHeader.style.borderBottom = "5px solid black";

    /* NOTE: Change render! This is currently a barebones template. */
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = this.title;

    // Create favorite button
    const favButton = document.createElement("button");
    favButton.textContent = this.isFavorite ? "❤️" : "♡";
    favButton.style.marginLeft = "8px";
    bookTitle.append(favButton);

    // Toggle favorite property on click
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
    });

    bookHeader.append(bookTitle);

    const infoButton = document.createElement("button");
    infoButton.textContent = "Book Info";
    infoButton.style.marginLeft = "8px";
    bookTitle.append(infoButton);

    infoButton.addEventListener("click", () => {
      if (bookInfo.style.display === "none") {
        bookInfo.style.display = "block";
      } else {
        bookInfo.style.display = "none";
      }
    });

    const bookInfo = document.createElement("ul");
    bookInfo.style.display = "none";

    const authorName = document.createElement("li");
    authorName.textContent = this.authors;
    authorName.style.marginTop = "5px";

    const bookLanguage = document.createElement("li");
    bookLanguage.textContent = this.language.toUpperCase();

    const subjectList = document.createElement("ul");
    subjectList.textContent = "Book Subjects: ";
    subjectList.style.borderBottom = "2px solid black";
    subjectList.style.borderTop = "2px solid black";
    subjectList.style.marginTop = "5px";

    for (const subjectInfo of this.subject) {
      let subjectItem = document.createElement("li");
      subjectItem.style.listStyle = "none";
      subjectItem.textContent = subjectInfo;
      subjectItem.style.margin = "5px";
      subjectList.append(subjectItem);
    }

    bookInfo.append(authorName, bookLanguage, subjectList);

    // Create an element which contains a list of information about the book.

    eachBook.append(bookHeader, bookInfo);

    return eachBook;
  };
}
