var nom = prompt("quel est ton nom ?");

// prenom = prompt("quel est ton prenom ?");
if(nom == "mbaye"){
  var prenom = prompt("Ton prénom");
  if(prenom == "papaoumar"){
      document.location.href = "http://slack.com";
  }
}else{
    alert("C'est faux !");
    document.location.reload();//Si on répond mal, il repose la question, recharge le document
}