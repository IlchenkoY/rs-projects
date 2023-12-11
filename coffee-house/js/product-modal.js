import createPproductCardMarkup from "./product-card.js";
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const productList = document.querySelector(".menu__list");

let currentOrderId;
let order;
let preSize = "s";
let preBtnId = 1;
let preBtn;

backdrop.addEventListener("click", closeModalHandler);
productList.addEventListener("click", openModalHandler);
document.addEventListener("click", choiceHandler);

function openModalHandler(e) {
  if (!e.target.closest(".menu__card-wrapper")) {
    return;
  }
  const productId = e.target.closest(".menu__card-wrapper").dataset.id;
  modal.innerHTML = createPproductCardMarkup(productId);
  window.addEventListener("keydown", escKeyHandler);
  toggleModal();
  preBtn = document.querySelector(".modal__item-btn");
  order = new Map();
}

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  document.querySelector("body").style.overflow =
    document.querySelector("body").style.overflow === "hidden"
      ? "auto"
      : "hidden";
}

function escKeyHandler(e) {
  if (e.code === "Escape") {
    toggleModal();
    window.removeEventListener("keydown", escKeyHandler);
  }
}

function closeModalHandler(e) {
  if (e.target === e.currentTarget || e.target.dataset.close === "close") {
    window.removeEventListener("keydown", escKeyHandler);
    toggleModal();
  }
}

function currenOrderBtn(currentBtn, preBtn) {
  preBtn.classList.remove("current");
  currentBtn.classList.add("current");
}

function choiceHandler(e) {
  if (
    e.target.matches(".modal__item-btn") ||
    e.target.matches(".modal__list-item-element")
  ) {
    const modalPrice = document.querySelector(".modal__price");
    let orderBtn = e.target.closest(".modal__item-btn");
    let basePrice = Number(modalPrice.textContent.slice(1));
    order.set(1, basePrice);
    let currentPrice =
      Number(e.target.dataset.price) ||
      Number(e.target.closest(".modal__item-btn").dataset.price);

    if (e.target.closest(".modal__item-btn").dataset.size) {
      if (orderBtn !== preBtn) {
        preBtn.classList.remove("current");
        preBtn = orderBtn;
      }
    }

    currentOrderId =
      Number(e.target.dataset.id) ||
      Number(e.target.closest(".modal__item-btn").dataset.id);

    if (order.has(currentOrderId)) {
      orderBtn.classList.remove("current");
      order.set(currentOrderId, basePrice);
      console.log(order);
      basePrice -= currentPrice;
      order.delete(currentOrderId);
    } else {
      orderBtn.classList.add("current");
      order.set(currentOrderId, basePrice);
      console.log(order);
      basePrice += currentPrice;
      order.set(currentOrderId, basePrice);
    }

    let integer = String(basePrice).split(".")[0];
    let fractional = String(basePrice).split(".")[1] || 0;

    modalPrice.textContent = `$${String(integer)}.${String(fractional).padEnd(
      2,
      "0",
    )}`;
  }
}
