
/* function toggleMenu() {
    const menuOverlay = document.getElementsByClassName("ham-menu-screen-closed");
    menuOverlay.classList.toggle("ham-menu-screen-open");
} */

/* const hamburger = document.querySelector("")  */

const menuShow = document.querySelector(".ham-closed")
const hamButton = document.querySelector(".hamburger")
const xButton = document.querySelector(".white-x")
const fade = document.querySelector("#background")

hamButton.addEventListener("click", function() {
  console.log("button clicked");
  menuShow.classList.toggle("ham-open")
  menuShow.classList.toggle("ham-closed")
  fade.classList.toggle("background-fade")
});
 
  xButton.addEventListener("click", function() {
  console.log("button clicked");
  fade.classList.toggle("background-fade")
  menuShow.classList.toggle("ham-open")
  menuShow.classList.toggle("ham-closed")
});




    


/*     document.getElementById('.hamburger').addEventListener('click', console.log("clicked"), function () {
    const menuScreen = document.getElementById('menuScreen')}); */
    
/*     // Toggle the classes
    if (menuScreen.classList.contains('ham-menu-screen-closed')) {
      menuScreen.classList.remove('ham-menu-screen-closed');
      menuScreen.classList.add('ham-menu-screen-open');
    } else {
      menuScreen.classList.remove('ham-menu-screen-open');
      menuScreen.classList.add('ham-menu-screen-closed');
    }
  }); */