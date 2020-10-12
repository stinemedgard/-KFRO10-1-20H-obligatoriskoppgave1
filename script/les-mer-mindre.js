// Utstilling - index.html
// function toggleUtstilling() {
//     var dott = document.getElementById("utstilling-dott");
//     var lesMer = document.getElementById("utstilling-lesmer");
//     var btn = document.getElementById("utstilling-btn");
  
//     if (dott.style.display === "none") {
//       dott.style.display = "inline";
//       btn.innerHTML = "Les mer";
//       lesMer.style.display = "none";
//     } else {
//       dott.style.display = "none";
//       btn.innerHTML = "Les mindre";
//       lesMer.style.display = "inline";
//     }
//   } 
// // Nyheter - index.html
//   function toggleNyheter() {
//     var dott = document.getElementById("nyheter-dott");
//     var lesMer = document.getElementById("nyheter-lesmer");
//     var btn = document.getElementById("nyheter-btn");
  
//     if (dott.style.display === "none") {
//       dott.style.display = "inline";
//       btn.innerHTML = "Les mer";
//       lesMer.style.display = "none";
//     } else {
//       dott.style.display = "none";
//       btn.innerHTML = "Les mindre";
//       lesMer.style.display = "inline";
//     }
//   }
// // Corona - index.html
//   function toggleCorona() {
//     var dott = document.getElementById("corona-dott");
//     var lesMer = document.getElementById("corona-lesmer");
//     var btn = document.getElementById("corona-btn");
  
//     if (dott.style.display === "none") {
//       dott.style.display = "inline";
//       btn.innerHTML = "Les mer";
//       lesMer.style.display = "none";
//     } else {
//       dott.style.display = "none";
//       btn.innerHTML = "Les mindre";
//       lesMer.style.display = "inline";
//     }
//   }
// // Industri - produkt.html
//   function toggleIndustri() {
//     var dott = document.getElementById("industri-dott");
//     var lesMer = document.getElementById("industri-lesmer");
//     var btn = document.getElementById("industri-btn");
  
//     if (dott.style.display === "none") {
//       dott.style.display = "inline";
//       btn.innerHTML = "Les mer";
//       lesMer.style.display = "none";
//     } else {
//       dott.style.display = "none";
//       btn.innerHTML = "Les mindre";
//       lesMer.style.display = "inline";
//     }
//   }

//   // Skulptur - produkt.html
//   function toggleSkulptur() {
//     var dott = document.getElementById("skulptur-dott");
//     var lesMer = document.getElementById("skulptur-lesmer");
//     var btn = document.getElementById("skulptur-btn");
  
//     if (dott.style.display === "none") {
//       dott.style.display = "inline";
//       btn.innerHTML = "Les mer";
//       lesMer.style.display = "none";
//     } else {
//       dott.style.display = "none";
//       btn.innerHTML = "Les mindre";
//       lesMer.style.display = "inline";
//     }
//   }

//   // Kunst - produkt.html
//   function toggleKunst() {
//     var dott = document.getElementById("kunst-dott");
//     var lesMer = document.getElementById("kunst-lesmer");
//     var btn = document.getElementById("kunst-btn");
  
//     if (dott.style.display === "none") {
//       dott.style.display = "inline";
//       btn.innerHTML = "Les mer";
//       lesMer.style.display = "none";
//     } else {
//       dott.style.display = "none";
//       btn.innerHTML = "Les mindre";
//       lesMer.style.display = "inline";
//     }
//   }


  // Utstilling - index.html
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