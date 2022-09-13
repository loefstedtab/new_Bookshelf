// --------------------------
//#region Initialization
// --------------------------
const bookList = document.querySelector(".books");
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

const render = () => {
  bookList.replaceChildren(bookshelf.render());
};

// Render the first time the page loads
bookshelf.filterVisibleBooks(() => true);
bookshelf.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
render();

//#endregion Initialization

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
  render();
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
    sortFn = (a, b) => a.title.localeCompare(b.title);
  } else if (query === "titleza") {
    sortFn = (a, b) => b.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
  render();
});

//#endregion Sorting
