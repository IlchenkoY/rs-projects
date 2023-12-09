import createPproductCardMarkup from "./product-card.js";
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const productList = document.querySelector(".menu__list");

backdrop.addEventListener("click", closeModalHandler);
productList.addEventListener("click", openModalHandler);

function openModalHandler(e) {
  const productId = e.target.closest(".menu__card-wrapper").dataset.id;
  modal.innerHTML = createPproductCardMarkup(productId);
  window.addEventListener("keydown", escKeyHandler);
  toggleModal();
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
