
//meny-knapp
var meny = document.querySelector('#toggle-meny');
var knapp = document.querySelector('#burger-meny');
if(window.screen.width > 1023){
meny.style.display = "inline"; 
knapp.style.display = "none";  
} 

function toggleMeny(){
    if(window.screen.width < 1024){
        if(meny.style.display == "none" || meny.style.display == "" ){
            meny.style.display = "block";    
        }else{
            meny.style.display = "none";
        }
    }
}