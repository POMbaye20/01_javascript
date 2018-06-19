//const est une constante accesible uniquement en lecture dans le contexte global et modifiable dans un contexte local

//les conditions if.. else if..else permettent de définir une condition pour laquelle on souhaite exécuter un code particulier. C'est un bloc de code local

// opérateurs logiques &&(AND), ||(OR), !(NOT) -> NOT transforme ce qui est vrai en faux
// -> les opérateurs logiques sont généralement utilisés avec des valuers booléennes en renverrons à l'exception de AND(&&) et OR(||).
//Pour en savoir plus : 

//les variables (var) sont des boites dans lesquelles on stock des données
//ex: var boite = ["donne1, donne2, donne3, donne4"];
// il existe des variables à portée global & local 
// global = "cette variable est global" 


// tests
var1 = "32";
var2 = 32;
console.log(32 === "32");

if (var1 === var2) {
    document.write("oui");
}else{
    document.write("non");
    document.location.href = "http://www.google.fr";
}