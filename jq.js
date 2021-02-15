/*segéd*/
function ridecon(szov) {
    return console.log(szov);
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
    tomb.sort(function (a, b) {
        return 0.5 - Math.random();
    });
    $("#jatekter").empty();
    var hosz = tomb.length;
    if (hosz > 0) {
        for (var i = 0; i < hosz; i++) {
            $("#jatekter").append("<div>");
            $("#jatekter div").html("<img>");
            $("#jatekter div img").attr({"src": "img/szurke.jpg", "class": "kartya"});
            backhat = tomb[i];
        }
    }else{
        
    }
}

function visszafordul() {
    $('.kartya img')[akt].src = "img/szurke.jpg";
    $('.kartya img')[akt2].src = "img/szurke.jpg";
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
    ridecon("katt");
    $(this).src = backhat;
    if (akt2 === " ") {
        akt2 = akt;
        hatter2 = this.img.src;
    } else {
        hatter = this.img.src;
    }
    ellen();
}

function kezd() {
    kezdIdo = new Date().getSeconds();
    vegJatek = 0;
    if (ido1 = 0 && ido2 != 0) {
        ido1 = 0;
        ido2 = 0;
    }
    for (var i = 0; i < 2; i++) {
        jatekter();
    }
}

function init() {
    $('#kezgomb').click(kezd);
    $('.kartya').click(fordul);
}
$(function () {
    init();
});


