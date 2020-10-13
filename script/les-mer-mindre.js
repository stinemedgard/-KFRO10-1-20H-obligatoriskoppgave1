
  // generell metode for alle passer man skal ha funksjonen ved å skjule/vise tekst
function toggleMerMindre(dott, lesMerMindre, knapp) {
    var dotter = document.getElementById(dott);
    var lesMer = document.getElementById(lesMerMindre);
    var btn = document.getElementById(knapp);  

    //hvis de tre punktumene er synlig på siden
    if (dotter.style.display === "none") {
      //viser de tre punktumene, skjuler en del av teksten og endrer teksten på knappen
        dotter.style.display = "inline";
        btn.innerHTML = "Les mer";
        lesMer.style.display = "none";
      //hvis de tre punktene ikke er synlig
    } else {
      //skjuler de tre punktumene, gjør resten av teksten synlig og endrer teksten på knappen
        dotter.style.display = "none";
        btn.innerHTML = "Les mindre";
        lesMer.style.display = "inline";
    }
} 
