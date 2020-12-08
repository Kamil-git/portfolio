
  
/*
  var width = $(window).width();
  if (width < 757 ) {
    const showMenu = function showMenu() {
      const menuTrigger = document.querySelector(".icon-menu");
      const menuNav = document.querySelector("#menu_nav");
      const bodyHandler = document.querySelector("body");

      menuTrigger.onclick = () => {
        menuNav.classList.toggle("open");
        bodyHandler.classList.toggle("open_menu");
      };
    };
  }
}); 
*/

const mq = window.matchMedia('(max-width: 757px )');

if (mq.matches) {
  const showMenu = function showMenu() {
    const menuTrigger = document.querySelector(".icon-menu");
    const menuNav = document.querySelector("#menu_nav");
    const bodyHandler = document.querySelector("body");

    menuTrigger.onclick = () => {
      menuNav.classList.toggle("open");
      bodyHandler.classList.toggle("open_menu");
    };
  };
};


// Adds and removes body class depending on screen width.
function screenClass() {
    if($(window).innerWidth() > 960) {
        $('body').addClass('big-screen').removeClass('small-screen');
    } else {
        $('body').addClass('small-screen').removeClass('big-screen');
    }
}

// Fire.
screenClass();

// And recheck when window gets resized.
$(window).bind('resize',function(){
    screenClass();
});