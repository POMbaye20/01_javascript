// Les boucles
// Dans les parenthèses de la boucle for : départ ; condition ; incrémentation

// Au départ, j’affecte une valeur à ma variable. Cette valeur est un chiffre.

// Ma condition dit « tant que ce chiffre est inférieur à 100 ».

// Mon incrémentation consiste à ajouter +1 à chaque tour de boucle.

// Dans mes accolades, ce code sera exécuté à chaque tour de boucle, donc il sera exécuté 99 fois.



// Boucle for exemple : 
// for(var monChiffre = 1; monChiffre <= 100; monChiffre++){
// document.write(monChiffre + "<br>");
// }


// La boucle WHILE est une autre manière d’écrire une boucle. Basée sur le même principe que la

// boucle for, ses instructions seront exécutées tant que la condition est remplie.

// La syntaxe de la boucle WHILE est plus proche de l’humain que celle de la boucle FOR même si la

// boucle FOR est très utilisée par les développeurs.

// Reprenons notre exemple du compteur de chiffre. Cette fois écrit en version WHILE:

// exemple :
// var monChiffre = 1;
// while(monChiffre <= 100) {
//     document.write(monChiffre + "<br>");

// //     // A chaque tour de boucles tu rajoutes 1
// //     monChiffre++;
// // }

// //Déprécier
// var monChiffre = 1;
// do {
//     monChiffre += 1;
//     monChiffre = monChiffre + 1;

//     monChiffre -= 1;
//     monChiffre = monChiffre - 1;

//     document.write("Ce code ne s'exécute pas qu'une seule fois ");
// }while (monChiffre <= 110) {
//     document.write(monChiffre + "<br>");
// }
// while (monChiffre < 110);

//Incrémentation
// var nombre = 1;
// monChiffre++ => monChiffre + 1;
// monChiffre-- => monChiffre - 1;

var monTableau = [
    {
    série : "Game of thrones",
    Saisons : "8",
    Sortie:"2011",
    },
    {
    série : "Vikings",
    Saisons : "5",
    Sortie:"2013",
    },
    {
    série : "Breaking bad",
    Saisons : "5",
    Sortie:"2008",
    },
    {
    série : "La  casa de Papel",
    Saisons : "2",
    Sortie:"2017",
    },
];

for(var i = 0; i < monTableau.length; i++)  {
    document.write("je regarde " + monTableau[i]);
}











// Push : pour le rajouter un élément dans le tableau en dernière position 
        // EXEMPLE: monTableau.push("Patrick")
// Unshift : pour le rajouter un élément dans le tableau en première position 
        // EXEMPLE: monTableau.unshift("Abdoulaye")
// Pop retire le dernier élément du tableau 
        // EXEMPLE : monTableau.pop();
// Shift retire le premier élément du tableau 
        // EXEMPLE : monTableau.shift();
// document.write(monTableau + " " + "<br>");
