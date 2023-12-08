const menuBtn = document.querySelector(".header__nav-btm--notdesktop");
const menu = document.querySelector(".header__menu-nav");
const menuWrapper = document.querySelector(".header__menu-nav-wrapper");
const menuNavList = document.querySelector(".header__menu-nav-list");
const menuNavLink = document.querySelector(".header__menu-nav-link");

menuBtn.addEventListener("click", toggleMenuHandler);
menuNavList.addEventListener("click", toggleMenuHandler);
menuNavLink.addEventListener("click", toggleMenuHandler);

function toggleMenuHandler() {
  //   window.addEventListener("resize", () => location.reload());
  menu.classList.toggle("is-open");
  menuBtn.classList.toggle("is-open");
  menuWrapper.classList.toggle("is-open");

  document.querySelector("body").style.overflow = menu.classList.contains(
    "is-open",
  )
    ? "hidden"
    : "auto";
}
