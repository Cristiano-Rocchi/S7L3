const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then(responseObj)
    .catch(err);
};
window.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
