  const menuTrigger = document.querySelector(".icon-menu");
  const menuNav = document.querySelector("#menu_nav");
  const bodyHandler = document.querySelector("body");
 
    if (window.innerWidth < 757 )  {
      menuTrigger.onclick = () => {
        menuNav.classList.toggle("open");
        bodyHandler.classList.toggle("open_menu");
        
      };
    }
    

 

