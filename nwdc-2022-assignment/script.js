
// Hamburger

  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

  var menu = document.querySelector(".menu");

  // menu.addEventListener("click", function(){
  //   menu.classList.toggle("is-active");
  // })
