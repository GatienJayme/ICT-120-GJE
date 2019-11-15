/* Program: ICT-120-Inscription javascript
Author: Gatien Jayme
Date: 15.11.2019
Version: 1.0 */

document.addEventListener("DOMContentLoaded", go);

// fond rouge de prenom
function classprenom() {
    prenom.classList.add("prenom")
}

// fond rouge de nom
function classnom() {
    nom.classList.add("nom")
}

// fond rouge de mdp
function classmdp() {
    mdp.classList.add("mdp")
}

// fond rouge de mdpconf
function classmdpconf() {
    mdpconf.classList.add("mdpconf")
}

// essayer de cacher et montrer le text
function cacherprenom() {
    prenom.classList.add("d-none")
}

// fonction qui devrai afficher le message d'erreur si le prenom est trop court
function fdiv_1(champ)
{
    if(champ.value.length < 2)
    {
        prenom.display
        return false;
    }
    else
    {
        return true;
    }
}

// pas compris pas reussi et pas eu le temps de faire
function g() {
    alert(window.location.search)
}

// fonction go sert a lancer toutes les fonctions quand l'évenement se déclenche
function go() {
    prenom.addEventListener("click", classprenom);
    nom.addEventListener("click", classnom);
    mdp.addEventListener("click", classmdp);
    mdpconf.addEventListener("click", classmdpconf);
    prenom.addEventListener("click", cacherprenom)
    txt1.addEventListener("click", fdiv_1);
}

