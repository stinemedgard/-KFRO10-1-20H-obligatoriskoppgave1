//meny-knapp 
var meny = document.querySelector('#toggle-meny')
var knapp = document.querySelector('#toggle-meny-btn')
meny.style.display = "none"
knapp.addEventListener('click', 
    function (event) {
        if(meny.style.display == ""){
            meny.style.display = "none"
        }else{
            meny.style.display = "";
        }
    }
);
