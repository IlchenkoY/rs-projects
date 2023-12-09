import productsLst from "../data/products.json" assert { type: "json" };

const productsList = document.querySelector(".menu__list");
const filter = document.querySelector(".menu__filter-oder-list");
const filterBtn = document.querySelector(".menu__filter-btn");
const loadMoreBtn = document.querySelector(".menu__btn");
const breakpoint = window.matchMedia("(width<= 768px)");
let choice = "coffee";
let currentFilterBtn = filterBtn;

filter.addEventListener("click", filterHandler);
loadMoreBtn.addEventListener("click", loadMoreHandler);
breakpoint.addListener(checkMediaQuery);

function addCurrenFilter(currentBtn) {
  currentFilterBtn.classList.remove("menu__filter-btn--current");
  currentBtn.classList.add("menu__filter-btn--current");
  currentFilterBtn = currentBtn;
}

function filterHandler(e) {
  if (productsLst.length > 4) {
    if (loadMoreBtn.classList.contains("none")) {
      loadMoreBtn.classList.remove("none");
    }
  }
  addCurrenFilter(e.target);
  choice = e.target.id;
  checkMediaQuery(breakpoint);
}

function createMarkup(products) {
  if (products[0].category === "tea") {
    loadMoreBtn.classList.add("none");
  }
  if (products.length > 4) {
    loadMoreBtn.classList.add("none");
  }
  productsList.innerHTML = createProductsListMarkup(products, choice);
}

function createProductsListMarkup(products, choice) {
  return products
    .filter(product => product.category === choice)
    .map(({ name, description, price, img, id }) => {
      return `
      <li class="menu__list-item data-id="${id}">
            <div class="menu__card-wrapper" data-id="${id}">
                <div class="menu__img-wrapper">
                  <img class="menu__list-item-img" src="${img}" loading="lazy" alt="${name}">
              </div>
              <div class="menu__list-item-description-wrapper">
                  <p class="menu__list-iten-title">${name}</p>
                  <p class="menu__list-iten-description">${description}</p>
                  <p class="menu__list-iten-price">$${price}</p>
              </div>
            </div>
      </li>
    `;
    })
    .join("");
}

function loadMoreHandler() {
  createMarkup(productsLst);
}

function checkMediaQuery(media) {
  if (productsLst.length > 4) {
    if (loadMoreBtn.classList.contains("none")) {
      loadMoreBtn.classList.remove("none");
    }
  }
  if (media.matches) {
    let filterProductsByMedia = productsLst.filter(
      product => product.category === choice,
    );
    filterProductsByMedia.length = 4;
    createMarkup(filterProductsByMedia);
    return;
  }
  createMarkup(productsLst);
}

checkMediaQuery(breakpoint);
addCurrenFilter(currentFilterBtn);
