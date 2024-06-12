const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      if (responseObj.ok) {
        console.log("Response Object", responseObj);
        return responseObj.json();
      }
    })
    .then((booksObj) => {
      console.log("bokks Object", booksObj);
    })
    .catch((err) => console.log(err));
};
window.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
