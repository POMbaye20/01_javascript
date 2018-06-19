var moi

moi = "mbaye"; //String

moi = 11; //Number

moi = 9,4 //Float

moi = true //boolean

moi = ["mbaye", 11, 9,4, true];//Array

// alert ("mbaye " + 9,4 + 11);


var tab = [
{
equipe = "Psg",
pays = "France",
Championnat = "ligue 1",
},
{
Equipe = "Real madrid",
pays = "espagne",
championnat = "liga santander",
},
{
Equipe = "Milan AC",
pays = "italie",
championnat = "serie a",
},
{
Equipe = "Manchester united",
pays = "angleterre",
championnat = "premier league",
},

];

for(var i = 0; i < tab.length; i++)  {
    alert("Team ligue des champions " + tab[i]);}