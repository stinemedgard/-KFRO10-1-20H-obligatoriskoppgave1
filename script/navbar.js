// Henter navigasjons meny
var navbar = document.getElementById("navbar-meny");
// Henter "burger" ikonet 
var burgerToggle = document.getElementById("Burger-meny-toggle");
// Legger event listener på burger ikonet. Når man klikker på "burger ikonet" så skal den skifte mellom å ha class'en active eller ikke.
burgerToggle.addEventListener("click", function() {
    navbar.classList.toggle("active");
});