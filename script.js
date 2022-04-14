// var counterElement = document.getElementById('counter');
// var imgElement = document.getElementById('img');

// var initialCountDown = counterElement.innerHTML;

// setInterval(function(){
//     initialCountDown =initialCountDown >0?initialCountDown-1:0;
//     counterElement.innerHTML=initialCountDown;

//     // var imgPath=initialCountDown % 2=== 0?'assets/bg_1.jpg':'assets/bg_2.jpg';
//     // imgElement.src=imgPath;

// },1000);

var counterElement=document.getElementById('counter');
console.log(counterElement);
var bg_imgElement=document.getElementById('bg-image');
console.log(bg_imgElement);
var counterInitialValue = counterElement.innerHTML;

setInterval(function(){
    counterInitialValue = counterInitialValue > 0 ?counterInitialValue -1: 0;

    counterElement.innerHTML = counterInitialValue;
    counterElement.style.fontSize=counterInitialValue *100 + "px";
    bg_imgElement.style.width=counterInitialValue *10 +"%";
    

},1000)










































