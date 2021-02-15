/*segéd*/
function ID(nev) {
    return document.getElementById(nev);
}
function select(nev) {
    return document.querySelectorAll(nev);
}
function CLASS(nev) {
    return document.getElementsByClassName(nev);
}
/*fő*/
var hetterSzin = "grey";
var JatekIdo, vegJatek;
var kezdIdo;
var ido1, ido2;
//var kepek=Array("img/bagoly.jpg");
var tomb = ["img/bagoly.jpg", "img/cica.jpg", "img/kutya.jpg", "img/roka.jpg", "img/roka2.jpg"];
var tomb2 = [];
var backhat = [];
var hatter;
var hatter2;
var akt;
var akt2;
var id;

function jatekter() {
    for (var i = 0; i < tomb.length; i++) {
        tomb2[i] = tomb[i];
    }
    tomb.sort(function (a, b) {return 0.5 - Math.random();});
    for (var i = 0; i < tomb.length; i++) {
        var tag = document.createElement("div");
        var kep = document.createElement("img");
        kep.src = "img/szurke.jpg";
        backhat = tomb[i];
        tag.appendChild(kep);
        tag.classList.add("kartya");
        ID('jatekter').appendChild(tag);
    }
}

function kezd() {
    kezdIdo = new Date().getSeconds();
    vegJatek = 0;
    if (ido1 != 0 && ido2 != 0) {
        ido1 = 0;
        ido2 = 0;
    }
    for (var i = 0; i < 2; i++) {
        jatekter();
    }
}
function visszafordul() {
    select('.kartya img')[akt].src = "img/szurke.jpg";
    select('.kartya img')[akt2].src = "img/szurke.jpg";
}
function ellen() {
    if ((hatter !== hatter2) && (hatter !== " " && hatter2 !== " ")) {
        visszafordul();
    } else
    {
        this.src = " ";
    }
}
function fordul() {
    for (var i = 0; i < select('.kartya').length; i++) {
        if (this === select('.kartya')[i]) {
            id = i;
        }
    }
    akt = id;
    select('.kartya img')[id].src = backhat;
    if (akt2 === " ") {
        akt2 = akt;
        hatter2 = this.img.src;
    } else {
        hatter = this.img.src;
    }
    ellen();
}
function init() {
    if (select('.kartya').length < 11) {
        ID('kezgomb').addEventListener('click', kezd, false);
    }
    for (var i = 0; i < select('.kartya').length; i++) {
        select('.kartya')[i].addEventListener('click', fordul, false);
    }
}
window.addEventListener('load', init, false);