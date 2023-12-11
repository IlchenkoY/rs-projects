import productsLst from "../data/products.json" assert { type: "json" };

export default function createPproductCardMarkup(id) {
  const {
    name,
    img,
    description,
    price,
    sizes: { s, m, l },
    additives,
  } = productsLst.filter(el => el.id.toString() === id)[0];
  const [additive1, additive2, additive3] = additives;
  return `
            <div class="modal__img-wrapper">
                <img class="modal__img" src="${img}" alt="${name}"/>
            </div>
            <div class="moda__info-card">
                <h2 class="modal__title">${name}</h2>
                <p class="modal__description">${description}</p>
                <p class="modal__sizes-title">Size</p>
                <ul class="modal__sizes-list">
                    <li class="modal__list-item"><button class="modal__item-btn current" data-price="${s["add-price"]}" data-id="1" data-size="s"><span class="modal__list-item-element">S</span>${s.size}</button></li>
                    <li class="modal__list-item"><button class="modal__item-btn" data-price="${m["add-price"]}" data-id="2" data-size="m"><span class="modal__list-item-element">M</span>${m.size}</button></li>
                    <li class="modal__list-item"><button class="modal__item-btn" data-price="${l["add-price"]}" data-id="3" data-size="l"><span class="modal__list-item-element">L</span>${l.size}</button></li>
                </ul>
                <p class="modal__additives-title">Additives</p>
                <ul class="modal__additives-list">
                    <li class="modal__list-item"><button class="modal__item-btn" data-price="${additive1["add-price"]}" data-id="4"><span class="modal__list-item-element">1</span>${additive1.name}</button></li>
                    <li class="modal__list-item"><button class="modal__item-btn" data-price="${additive2["add-price"]}" data-id="5"><span class="modal__list-item-element">2</span>${additive2.name}</button></li>
                    <li class="modal__list-item"><button class="modal__item-btn" data-price="${additive3["add-price"]}" data-id="6"><span class="modal__list-item-element">3</span>${additive3.name}</button></li>
                </ul>
                <div class="modal__total-info-wrapper">
                    <p class="modal__total">Total:</p>
                    <p class="modal__price">$${price}</p>
                </div>
                <div class="modal__info">
                    <svg class="modal__info-icon" width="16" height="16">
                        <use href="./images/sprite.svg#icon-info-empty"></use>
                    </svg>
                    <p class="modal__info-description">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                </div>
                <button class="modal__close-btn" type="button" data-close="close">Close</button>
            </div>
            
      `;
}
