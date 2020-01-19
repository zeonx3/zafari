const home = window.document.querySelector('#Home');
const wzp = window.document.querySelector('#WhatzAPP');
const zpy = window.document.querySelector('#Zpotify');
const tp = window.document.querySelector('#T-p');
let iframe = document.getElementById("lala");


home.addEventListener('click', RHome);

function RHome() {
	iframe.src = "../Home/index.html";
	tp.innerHTML = "Zafary<br>La mejor forma de ver<br> los sitios web."
}

wzp.addEventListener('click', RWhatzapp);

function RWhatzapp() {
	iframe.src = "../Whatzapp/index.html";
	tp.innerHTML = "WhatzAPP"
}

zpy.addEventListener('click', RZpotify);

function RZpotify() {
	iframe.src = "../zpotify/index.html";
	tp.innerHTML = "Zpotify";
}