// javascript for carousel, navbar links, and any other functions.
let slideIndex = 0;

/* Modal Content */

// Get the modal
var modal = document.getElementById("credits-modal");

// Get the button that opens the modal
var btn = document.getElementById("credits-btn");

// Get the <i> element that closes the modal
var iElement = document.getElementsByClassName("material-icons")[2];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <i> (x), close the modal
iElement.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}    
        slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,10000); // Changes slide every 10 seconds
   
}

// Mobile Site

function openClose() {
    var nav = document.getElementById("top-nav");
    var menuContainer = document.getElementById("menu-container");
    var icon = document.getElementById("navIcon");
    var siteTitle = document.getElementById("site-title");

    if (nav.className == "topnav") { 
        nav.className += " responsive";
        siteTitle.className += " responsive";
        menuContainer.className += " responsive";
        icon.innerHTML = "close";

    } else {
        nav.className = "topnav";
        siteTitle.className = "siteTitle";
        menuContainer.className = "menu_container";
        icon.innerHTML = "menu";
    }
}
