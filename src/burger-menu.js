const panel = document.querySelector(".burger-menu__panel");
const toggleBurger = () => {
  if (panel.classList.contains("burger-menu__panel--open")) {
    panel.classList.remove("burger-menu__panel--open");
    panel.classList.add("burger-menu__panel--close");
  } else {
    panel.classList.remove("burger-menu__panel--close");
    panel.classList.add("burger-menu__panel--open");
  }

  const menubar = document.querySelector(".burger-menu__bar");
  if (menubar.classList.contains("burger-menu__bar--open")) {
    menubar.classList.remove("burger-menu__bar--open");
  } else {
    menubar.classList.add("burger-menu__bar--open");
  }
};
