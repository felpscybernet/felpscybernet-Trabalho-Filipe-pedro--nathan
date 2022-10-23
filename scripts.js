closeSidebar();
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}


// Funções dos botões 
function a(){
 console.log("Movies");
}

function b(){
 console.log("Friends");
}

function c(){
 console.log("Hormonios");
}

function d(){
  console.log("Mentoria");
 }

// onclick
document.querySelector("#movies").onclick = a;

// onclick
document.querySelector("#friends").onclick = b;

// onclick
document.querySelector("#hormonios").onclick = c;

// onclick
document.querySelector("#mentoria").onclick = d;