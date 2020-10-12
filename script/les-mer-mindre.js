function toggleUtstilling() {
    var dott = document.getElementById("utstilling-dott");
    var lesMer = document.getElementById("utstilling-lesmer");
    var btn = document.getElementById("utstilling-btn");
  
    if (dott.style.display === "none") {
      dott.style.display = "inline";
      btn.innerHTML = "Les mer";
      lesMer.style.display = "none";
    } else {
      dott.style.display = "none";
      btn.innerHTML = "Les mindre";
      lesMer.style.display = "inline";
    }
  }
  function toggleNyheter() {
    var dott = document.getElementById("nyheter-dott");
    var lesMer = document.getElementById("nyheter-lesmer");
    var btn = document.getElementById("nyheter-btn");
  
    if (dott.style.display === "none") {
      dott.style.display = "inline";
      btn.innerHTML = "Les mer";
      lesMer.style.display = "none";
    } else {
      dott.style.display = "none";
      btn.innerHTML = "Les mindre";
      lesMer.style.display = "inline";
    }
  }
  function toggleCorona() {
    var dott = document.getElementById("corona-dott");
    var lesMer = document.getElementById("corona-lesmer");
    var btn = document.getElementById("corona-btn");
  
    if (dott.style.display === "none") {
      dott.style.display = "inline";
      btn.innerHTML = "Les mer";
      lesMer.style.display = "none";
    } else {
      dott.style.display = "none";
      btn.innerHTML = "Les mindre";
      lesMer.style.display = "inline";
    }
  }