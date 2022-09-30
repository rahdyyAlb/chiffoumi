"use strict";

// déclaration des variables 
let ordinateur;
let utilisateur = prompt("veuillez saisir pierre feuille ou ciseau").toLocaleLowerCase();
let min = 1;
let max = 3;
let random = Math.floor(Math.random() * (max - min) + min)
console.log(random);

// déterminer le choix de l'ordinateur 
if(random == 1)
{
    ordinateur = "feuille";
}
else if(random == 2)
{
    ordinateur = "pierre";
}
else
{
    ordinateur = "ciseau";
}
// traitemement 
document.write("<p>Vous avez choisi "+utilisateur+"</p>");
document.write("<p>l'ordinateur à choisi "+ordinateur+"</p>");

// comparer 
if(ordinateur == utilisateur){
    document.write("<p> Une égalité</p>");
}
else
{
    switch (utilisateur) 
    {
        case 'feuille':
            // code
            // pierre
            if(ordinateur == "pierre")
            {
                document.write("<p>La feuille enveloppe la pierre : vous gagnez !</p>'")
            }
            else//ciseau
            {
                document.write("<p>La ciseau découpe la feuille : vous perdu !</p>'")
            }
            
            break;
        case 'pierre':
            // code
            // feuille 
            if(ordinateur == "feuille")
            {
                document.write("<p>La feuille enveloppe la pierre : vous perdu !</p>'")
            }
            else//ciseau
            {
                document.write("<p>La pierre ecrase le ciseau : vous gagnez !</p>'")
            }
            break;
        case 'ciseau':
            // code
            //fuille
            if(ordinateur == "feuille")
            {
                document.write("<p>Le ciseau decoupe la feuille : vous gagnez !</p>'")
            }
            else//pierre
            {
                document.write("<p>La pierre ecrase le ciseau : vous perdu !</p>'")
            }
            break;
        default:
            // code
            document.write("<p>Veuillez bien choisir soit pierre feuille ou ciseau </p>");
    }
}







