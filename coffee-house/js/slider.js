const coffeeList = document.querySelector(".favorite-coffee__list");
const paginationItemsList = document.querySelectorAll(
  ".favorite-coffee__pagination-list-item",
);
const coffeeListWrapper = document.querySelector(
  ".favorite-coffee__list-wrapper",
);
const firstImg = coffeeList.querySelectorAll("img")[0];
const arrows = document.querySelectorAll(".favorite-coffee__arrow-btn");
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
let coffeeListLength = 0;
let index = 0;
paginationItemsList[index].classList.add("current");

arrows.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth;
    let iconType = icon.dataset.type;
    coffeeListLength += iconType === "left" ? -firstImgWidth : firstImgWidth;
    index += iconType === "left" ? -1 : 1;
    if (index < 0) {
      index = 0;
    }
    if (index > 2) {
      index = 0;
      paginationItemsList[2].classList.remove("current");
      coffeeListWrapper.scrollLeft -= firstImgWidth * 3;
      paginationItemsList[index].classList.add("current");
      coffeeListLength = 0;
      return;
    }
    iconType === "left"
      ? paginationItemsList[index + 1].classList.remove("current")
      : paginationItemsList[index - 1].classList.remove("current");

    paginationItemsList[index].classList.add("current");

    if (coffeeListLength === firstImgWidth * 3) {
      coffeeListWrapper.scrollLeft -= coffeeListLength;
      coffeeListLength = 0;
      return;
    }

    coffeeListWrapper.scrollLeft +=
      iconType === "left" ? -firstImgWidth : firstImgWidth;
  });
});

function autoscroll() {
  let firstImgWidth = firstImg.clientWidth;
  coffeeListLength += firstImgWidth;
  index += 1;
  if (index > 2) {
    index = 0;
    paginationItemsList[2].classList.remove("current");
  }
  paginationItemsList[index].classList.add("current");
  if (index > 0) {
    paginationItemsList[index - 1].classList.remove("current");
  }

  if (coffeeListLength === firstImgWidth * 3) {
    coffeeListWrapper.scrollLeft -= coffeeListLength;
    coffeeListLength = 0;
    return;
  }
  coffeeListWrapper.scrollLeft += firstImgWidth;
}

setInterval(autoscroll, 5000);
