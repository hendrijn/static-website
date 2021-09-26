window.onload=function(){
const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".navlinks");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    navlinks.classList.toggle("active");
}
}