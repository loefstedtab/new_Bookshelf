function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = () => {
    const li = document.createElement("li");
    li.textContent = this.title;
    return li;
  };

  /* NOTE: Favorite Feature is currently not implemented. */
}
