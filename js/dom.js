// Manipuler le DOM

var div = document.getElementById('maDiv');
// alert(div)
// var classe = document.getElementsByClassName ('maClass');
// alert(classe);
// var name = document.getElementsByClassName ('papaoumar');
// alert(name);

// var imgs = document.getElementsByClassName('img');
// for (var i = 0; i <imgs.length, i++){
//     alert ("Élément n° ")
// }

var liens = document.getElementById('lien');
//Récupère l'attribut href du lien
var hrefs = liens.getAttribute('href');

alert(hrefs);

//Modifie la valeur du href dans le lien
liens.setAttribute('href', 'https://google.com'); //setAttribute : pour mettre à jour l'attribut
alert(liens);

//Ajoute une classe à la div maDiv
div.className = 'blue';

//Créé une variable classes qui contient nos classes
var classes = document.getElementById('test').className;
alert(classes);

//Je crée un tableau vide qui va contenir les nouvelles classes 
var nouvelClasses = [];

//La méthode split() me permet de découper le résultat en plus petit morceaux. Ici je défini la division sur l'espace(' ');
classes = classes.split(' ');

//On parcours le tableau des classes
 for(var i = 0; i < classes.length; i++){
     if (classes[i]){
         nouvelClasses.push(classes[i]);
     }
 }

 alert(nouvelClasses);
 var element = document.querySelector('div');
 //Ajouter une classe sur une balise 
div.classList.add('new');

// Retire une classe
div.classList.remove('efface');

// Retire une classe si elle exsite ou bien l'ajoute si elle n'existe pas
div.classList.toggle('classe-toggle');

//