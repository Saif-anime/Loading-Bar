// selected h1 and progress 

var progress = document.querySelector(".progress");
var h1 = document.querySelector("h1");


// create a aray 
var arr = [0, 10, 20, 30,50, 70, 80, 100];
var i = 0;

const interval = setInterval(() =>{
progress.style.width = arr[i]+"%";
h1.innerHTML = arr[i] + "%";
i++;

if(i == arr.length){
    h1.innerHTML = "Completed";
    clearInterval(interval);
}






}, 1000)

