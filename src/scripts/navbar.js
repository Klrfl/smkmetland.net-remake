const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const mainNav = document.getElementById("main-nav");

closeNav.addEventListener("click", () => {
  mainNav.classList.remove("active");
});

openNav.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

const navButtons = document.querySelectorAll("#main-nav > ul li button");
const navSubMenus = document.querySelectorAll(".main-nav__sub-menu");

navButtons.forEach((navButton) => {
  const adjacentNavSubMenu = navButton.parentElement.children[1];

  navButton.addEventListener("click", () => {
    adjacentNavSubMenu.classList.toggle("active");

    navSubMenus.forEach((navSubMenu) => {
      if (navSubMenu !== adjacentNavSubMenu) {
        navSubMenu.classList.remove("active");
      }
    });
  });
});
