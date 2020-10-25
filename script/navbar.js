var navbar = document.getElementById("navbar-meny");
var burgerToggle = document.getElementById("Burger-meny-toggle");

burgerToggle.addEventListener("click", function() {
    navbar.classList.toggle("active");
});