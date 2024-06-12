const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      if (responseObj.ok) {
        console.log("Response Object", responseObj);
        return responseObj.json();
      }
    })
    .then((books) => {
      console.log("books", books);
      const row = document.getElementById("cardsConteiner");
      books.forEach((element) => {
        const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("bg-dark");
        card.classList.add("text-light");

        const img = document.createElement("img");
        img.src = element.img;

        const cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");
        const button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.innerText = "delete";
        button.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.parentElement.remove();
        });

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("cardTitle");
        cardTitle.textContent = element.title;
        const cardPrice = document.createElement("p");
        cardPrice.textContent = "prezzo: " + element.price + "€";

        /* col.appendChild(card);
        cardsConteiner.appendChild(col); */
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};
window.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
