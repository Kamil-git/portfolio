const showMenu = function showMenu() {
  const menuTrigger = document.querySelector(".icon-menu");
  const menuNav = document.querySelector("#menu_nav");
  const bodyHandler = document.querySelector("body");

  menuTrigger.onclick = () => {
    menuNav.classList.toggle("open");
    bodyHandler.classList.toggle("open_menu");
  };}


  
  $(window).bind("resize", function () {
    if (window.innerWidth < 757) {
    showMenu()
    ;};});

 
  



