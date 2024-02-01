import { imageMatrices } from "../../data/image-matrices";

export default function gameSettingsMarkup(size) {
  const { body } = document;
  if (body.children[0].classList.contains("game-settings")) {
    selectMarkup(size);
    return;
  }
  const markup = `<form class="game-settings">
                    <p class="game-settings-title">Сhoose size:</p>
                    <label>
                      <input class="game-settings-radio" type="radio" name="size" value="5" checked />
                      5x5
                    </label>
                    <label>
                      <input class="game-settings-radio" type="radio" name="size" value="10" />
                      10x10
                    </label>
                    <label>
                      <input class="game-settings-radio" type="radio" name="size" value="15" />
                      15x15
                    </label>
                    <label for="size">Сhoose picture</label>
                    <select class="settings-select" id="picture" name="picture">
                    </select>
                   <button type="submit">Play</button>
                   <button class="give-up" type="button" disabled>Give Up</button> 
                  </form>`;
  body.insertAdjacentHTML("afterbegin", markup);
  selectMarkup(size);
}

function selectMarkup(size) {
  const select = document.querySelector(".settings-select");
  select.innerHTML = Object.keys(imageMatrices[size])
    .map((el) => `<option value="${el}">${el.toUpperCase()}</option>`)
    .join("");
}
