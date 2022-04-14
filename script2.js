var button = document.getElementById('btn-click');
var div_main= document.querySelector('header div');
function btnClicked(){
var random_number=Math.floor(Math.random()*255);
// alert(random_number);
div_main.style.backgroundColor = "rgb("+random_number+","+random_number+","+random_number+")"
}


button.addEventListener('click',btnClicked);