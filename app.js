function login(){

let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(user && pass){

document.getElementById("login").style.display="none";
document.getElementById("app").classList.add("active");

}

}

function logout(){

location.reload()

}

function show(id){

document.getElementById("home").classList.add("hidden");
document.getElementById("profile").classList.add("hidden");

document.getElementById(id).classList.remove("hidden");

}

function toggleDark(){

document.body.classList.toggle("dark");

}
