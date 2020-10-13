var slideIndex = 0;
//starter bildekarusellen kun for skjermer større enn 1024px(desktop)
if(window.screen.width > 1024){
  var forsidebilde = document.getElementById('forside-bilde');
  var bildekarusellContainer = document.getElementById('bildekarusell-container');
  //skjuler forsidebildet og viser bildekarusellen
  forsidebilde.style.display = 'none';
  bildekarusellContainer.style.display = 'inline';

  showSlides();
}


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
    setTimeout(showSlides, 4000); 
  }