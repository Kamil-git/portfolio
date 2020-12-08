const showMenu = function showMenu() {
  const menuTrigger = document.querySelector("nav");
  const menuNav = document.querySelector("#menu_nav");
  menuTrigger.onclick = () => {
    menuNav.classList.toggle("open");
  };
};

if (window.innerWidth < 757) {
  showMenu();
}
