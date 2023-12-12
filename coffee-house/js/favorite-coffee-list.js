import favoriteCoffeeData from "../data/favorite-coffee.json" assert { type: "json" };

const coffeeList = document.querySelector(".favorite-coffee__list");

coffeeList.innerHTML = favoriteCoffeeListMarkup(favoriteCoffeeData);

function favoriteCoffeeListMarkup(CoffeeData) {
  return CoffeeData.map(({ name, description, price, img, id }) => {
    return `
      <li class="favorite-coffee__list-item" data-id="${id}">
            <img class="favorite-coffee__card-img" src="${img}"
                alt="${name}">
            <p class="favorite-coffee__card-title">${name}</p>
            <p class="favorite-coffee__card-description">${description}</p>
            <p class="favorite-coffee__card-price">$${price}</p>
      </li>
    `;
  }).join("");
}
