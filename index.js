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
      const row = document.getElementById("cardsContainer");
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
        button.classList.add("btn-outline-danger");
        button.innerText = "delete";
        button.addEventListener("click", (event) => {
          /* event.target.parentElement.parentElement.parentElement.remove(); */
          event.target.closest(".col").remove();
        });

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("cardTitle");
        cardTitle.textContent = element.title;
        const priceAndButtonContainer = document.createElement("div");
        priceAndButtonContainer.classList.add(
          "d-flex",
          "justify-content-between",
          "priceAndButtonContainer"
        );
        const cardPrice = document.createElement("p");
        cardPrice.textContent = "prezzo: " + element.price + "€";

        /* col.appendChild(card);
        cardsConteiner.appendChild(col); */

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(priceAndButtonContainer);
        priceAndButtonContainer.appendChild(cardPrice);
        priceAndButtonContainer.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);
      });
      const main = document.querySelector("main");
      const footer = document.createElement("footer");
      footer.classList.add("mt-4", "text-center", "text-secondary");

      const pFooter = document.createElement("p");

      pFooter.innerHTML = "copyright kun (131213121312)";
      footer.appendChild(pFooter);

      main.insertAdjacentElement("afterend", footer);
    })
    .catch((err) => console.log(err));
};
window.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
