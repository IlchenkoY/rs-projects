import createPproductCardMarkup from "./product-card.js";
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const productList = document.querySelector(".menu__list");

let preBtn;
let order;
let priceS;
let modalPrice;

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
  order = {};
  modalPrice = document.querySelector(".modal__price");
  priceS = Number(modalPrice.textContent.slice(1));
  preBtn = document.querySelector(".modal__item-btn");
  preBtn.classList.add("current");

  order = { basePrice: priceS, sizeAddedPrise: 0, additives: {} };
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

function choiceHandler(e) {
  if (
    e.target.matches(".modal__item-btn") ||
    e.target.matches(".modal__list-item-element")
  ) {
    let orderBtn = e.target.closest(".modal__item-btn");
    let totalPrice = order.basePrice + order.sizeAddedPrise;

    if (e.target.closest(".modal__item-btn").dataset.id < 4) {
      size = orderBtn.dataset.size;
      if (orderBtn !== preBtn) {
        preBtn.classList.remove("current");
        orderBtn.classList.add("current");
        preBtn = orderBtn;
        order.sizeAddedPrise = Number(orderBtn.dataset.price);
      }

      totalPrice =
        Object.values(order.additives).length > 0
          ? order.basePrice +
            order.sizeAddedPrise +
            Object.values(order.additives).reduce((pre, el) => pre + el)
          : order.basePrice + order.sizeAddedPrise;
    }

    if (e.target.closest(".modal__item-btn").dataset.id > 3) {
      e.target.closest(".modal__item-btn").classList.toggle("current");
      let additive = orderBtn.textContent.slice(1).toLowerCase();
      order.additives[additive]
        ? delete order.additives[additive]
        : (order.additives[additive] = Number(
            e.target.closest(".modal__item-btn").dataset.price,
          ));
      totalPrice =
        Object.values(order.additives).length > 0
          ? (totalPrice += Object.values(order.additives).reduce(
              (pre, el) => pre + el,
            ))
          : (totalPrice += 0);
    }

    let integer = String(totalPrice).split(".")[0];
    let fractional = String(totalPrice).split(".")[1] || 0;
    modalPrice.textContent = `$${String(integer)}.${String(fractional).padEnd(
      2,
      "0",
    )}`;
  }
}
