function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = function () {
    const li = document.createElement("li");
    li.textContent = this.title;

    const favButton = document.createElement("button");
    favButton.textContent = this.isFavorite ? "❤️" : "♡";
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
    });

    li.append(favButton);

    return li;
  };
}
