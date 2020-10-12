
  // generell metode for alle passer man skal ha funksjonen ved å skjule/vise tekst
function toggleMerMindre(dott, lesMerMindre, knapp) {

    var dotter = document.getElementById(dott);
    var lesMer = document.getElementById(lesMerMindre);
    var btn = document.getElementById(knapp);
  
    if (dotter.style.display === "none") {
        dotter.style.display = "inline";
        btn.innerHTML = "Les mer";
        lesMer.style.display = "none";
    } else {
        dotter.style.display = "none";
        btn.innerHTML = "Les mindre";
        lesMer.style.display = "inline";
    }
  } 