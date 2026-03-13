function login(){

let name=document.getElementById("loginName").value;
let pass=document.getElementById("loginPass").value;

if(name && pass){

document.getElementById("loginScreen").style.display="none";
document.getElementById("appScreen").classList.add("active");

}

}

function show(id){

document.getElementById("home").classList.add("hidden");
document.getElementById("profile").classList.add("hidden");

document.getElementById(id).classList.remove("hidden");

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}
