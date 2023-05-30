


var add = document.getElementById("add");
var subtract = document.getElementById("substract");
var reset = document.getElementById("reset");
var count = document.querySelector(".current-count");
var numKali = document.querySelector("#counter-double-kali");
var numBagi = document.querySelector("#counter-double-bagi");
var numExpo = document.querySelector("#counter-double-pangkat");
var num = 0;

add.addEventListener("click",()=>{
  num++;
  updateNum()
});

subtract.addEventListener("click",()=>{
  num--;
  updateNum()
});

reset.addEventListener("click",()=>{
  num = 0;
  updateNum()
});

function updateNum(){
  count.innerText = num;
  kali();
  bagi();
  expo()
}

function kali(){
  var kali = num*2;
  numKali.innerText = kali;
}
function bagi(){
  var bagi = num/2;
  numBagi.innerText = bagi;
}
function expo(){
  var pangkat = num*num;
  numExpo.innerText = pangkat;
}