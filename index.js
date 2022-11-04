// --------------------------
//#region Initialization
// --------------------------
const bookshelfElement = document.querySelector(".books");

const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);
bookshelf.render();

//#endregion Initialization

// --------------------------
//#region Favorite Feature
// --------------------------
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature

// --------------------------
//#region Searching
// --------------------------
const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.title.toLowerCase().includes(query);
  bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------
const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

//#endregion Sorting

//-----------------------------
//#region addbook
//-----------------------------

//we need to create an html element that allows the user to input all the book information.
const dropdown = document.querySelector(".dropdown");
//this arrow with the event listener expands a dropdown menu that allows the user to input information for a new book. 
//Takes up less room on the browser
let downArrow = document.querySelector(".arrowDown");
downArrow.addEventListener("click", () => {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
    dropdown.style.flexDirection = "column";

    downArrow.style.transform = "rotate(227deg)";
  } else {
    dropdown.style.display = "none";
    downArrow.style.transform = "rotate(45deg)";
  }
});
//An addBook button allows the user to submit the new book information and then pushes that book into our bookshelf
const addBook = document.querySelector(".addBook");
addBook.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const language = document.querySelector("#language");
  const subjects = document.querySelector("#subjects");

  let newBook = new Book(
    author.value,
    language.value,
    subjects.value,
    title.value
  );

  bookshelf.addBook(newBook);

  bookshelf.render();

  author.value = "";
  language.value = "";
  subjects.value = "";
  title.value = "";

  return bookshelf;
});

//how do we link the information put into the created html element with our book class?

//we need to create an add button that pushes the new book by creating a new instance of the Book class info into our array of books.

//the new book needs to be rendered on the bookshelf page which means that we probably need to call bookshelf.render() at some point when the submit button is clicked.

// const newBook = new Book(authors, language, subject, title);

//on the click then maybe authors, language etc... could be set equal to text.value of each box
//then the bookshelf.render() might be called at the very end


//Thought that I could make a delete book button. Figured it would be as easy as using .pop to remove it from the array of books. However, didnt work out.


// const deleteBook = document.querySelector(".deleteBook");
// deleteBook.addEventListener("click", () => {
//   bookshelf.removeBook(Book);
//   bookshelf.render();
//   return bookshelf
// })



//-----------------------------
//#endregion addbook
//-----------------------------



