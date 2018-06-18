var string = "papaoumar";
var float = 1.94;
var number = 1;
var boolean = false;
var array = []; 

// console.log(typeof (string));
// console.log(typeof (1.94));
// console.log(typeof (1));
// console.log(typeof (false));
// console.log(typeof (array));

var t = float.toString(); //Fonction toString(); permet de convertir ma variable en texte


// console.log(typeof(t));
// console.log(typeof(f));

//const sert à déclarer une constante qui sera accessible uniquement en lecture. ici elle a une portée globale c'est à dire que je peux l'appeller n'importe où dans mon script elle aura toujours la valeur "constante"
const CONSTANTE = "Constante";

// let CONSTANTE = 12; //Renvoi une erreur car la constante est déja définie dans le contexte global.

// //Début condition
// if (CONSTANTE === "Constante") {//Début bloc local
//     let CONSTANTE = 20;
//     console.log(CONSTANTE);
// }//Fin bloc local
// // var CONSTANTE = 20;

// console.log(CONSTANTE);
// = affecter une valeur
//== comparer que 2 valeurs sont identiques (ex: 7 et "7")
// === vérification que 2 valeurs sont identiques et du même type (ex: 7 et 7(vrai) | ex : 7 et "7" (faux))
// < inférieur à 
// > supérieur à
// >= supérieur ou égal à
// <= inférieur ou égal
// != vérifier que 2 valeurs sont inégales
// !== vérifier que 2 valeurs sont strictement inégales  
const AZERTY = 20;

if (AZERTY < 20 ) {
    let AZERTY = 12;
    console.log(AZERTY);
    }else if(AZERTY === 20){
        console.log(12);
}
//ParseInt permet de préciser que l'on attend un nombre en retour

var age = parseInt(prompt("Quel est votre âge ?"));
// alert(age);

var majorite = 18;

if (age >= 18) {
    alert("Super tu es majeur");
    }else{
    alert("Dommage");
    document.location.href ="https://google.fr";
}

//ParseFloat permet de préciser que l'on attend un nombre à virgule en retour
// var azerty = parseFloat(prompt("Quel est votre âge ?"));
// alert(azerty);


