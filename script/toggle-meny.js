//meny-knapp 
var meny = document.querySelector('#toggle-meny')
var knapp = document.querySelector('#toggle-meny-btn')

if(window.screen.width > 1024){
    meny.style.display = "block"
}else{
    meny.style.display = "none"
}



window.addEventListener('resize', function(){
   var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
   if (viewportWidth > 1024){
    meny.style.display = "block"
   }else{
    meny.style.display = "none"

    knapp.addEventListener('click', 
    function (event) {
        if(meny.style.display == "block"){
            meny.style.display = "none"
        }else{
            meny.style.display = "block";
        }
    }
);
   }
});

