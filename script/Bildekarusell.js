//variabel som henter størrelsen til nettleserVinduet
var nettleserVinduBredde = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
var forsidebilde = document.getElementById('forside-bilde');
var bildekarusellContainer = document.getElementById('bildekarusell-container');

//setter slideIndex = 0 for at den skal begynne på den første bildet
var slideIndex = 0;
  showSlides();
//funksjon for at bildekarusellen skal veksle mellom bildene som er lagt inn i bildekarusellen
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("bildekarusell");
    //går i gjennom alle bildekarusell elementene som har definert i index.html og skjuler dem en for en
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    //hvis indeksen er blitt større enn antall bildekarsell-elementer så settes den til 1 igjen
    if (slideIndex > slides.length) {
      slideIndex = 1
    }    
    //gør et og et bilde synlig igjen
    slides[slideIndex-1].style.display = "block";  
    //setter at bildekarusellen skal bruke 4 sekunder før den bytter bilde
    setTimeout(showSlides, 4000); 
  }