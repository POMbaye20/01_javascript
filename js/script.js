// // Initialisation de l'objet moi Variable global
// var moi;

// moi = "Papaoumar";//Valeur de type string

// moi = 30; //Type number

// moi = true; //Boolean (comparaison entre vrai et faux)

// moi = 1.05; //Type float

// moi = ["Papaoumar", 30, 12.5, true]; //Type Array (tableau)

// // alert("salut " + moi);
// console.log("Salut " + moi[0] + " tu as " + moi[1] + " et " + moi[2] );

var a=3;// a est un nom de variable (arbitraire)
var b=5;//1 est une valeur (arbitraire)
alert("a " + b);
console.log(a+b);//Le console ne s'éxecute seulement dans la console, en faisant un clic droit sur examiner l'élement et ensuite mettre console
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b); //Renvoi le reste de la division

function changeColor(newColor) {
    var elem = document.getElementById('header');
    elem.style.color = newColor;
}

