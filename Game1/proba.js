var i =0;
var tableau = [];

document.getElementById("envoyer-1").addEventListener("click", function(){
    var taille = document.getElementById("taille").value;
    document.getElementById("envoyer-2").addEventListener("click", function(){
        if (i < taille) {
            var chiffre = document.getElementById("tab").value;
            tableau.push(chiffre);
            i++;
        }else{ // i>= taille, on aura accès à toutes les valeurs du tableau
            document.getElementById("envoyer-2").value = "Generate!";
            document.getElementById("envoyer-2").addEventListener("mouseover", function(){
                document.getElementById("moyenne").textContent = moyenne(tableau);
                document.getElementById("variance").textContent = variance(tableau);
                document.getElementById("ecart-type").textContent = ecartType(tableau);
            });
        }
    });
});

document.getElementById("reset-1").addEventListener("click", function(){
    document.location.reload(true);
});
document.getElementById("reset-2").addEventListener("click", function(){
    document.location.reload(true);
});

/* FONCTIONS DE CALCUL UTILISEES LORS DU CLIC */

function moyenne(tableau){
    var sum = 0;
    var moyenne = 0;
    for (var i = 0; i < tableau.length; i++) {
        sum = sum + parseInt(tableau[i]);
    }
    moyenne = sum / tableau.length;
    return moyenne;
}

function variance(tableau){
    var moy = moyenne(tableau); //nom de variable ne peut pas être "moyenne" car sinon JS ne comprend pas dans la suite de la fonction, il y a conflit
    var sum = 0;
    var variance = 0;
    for (var i = 0; i < tableau.length; i++) {
        sum = sum + (parseInt(tableau[i]) - moy) * (parseInt(tableau[i]) - moy);
    }
    variance = sum / tableau.length;
    return variance;
}

function ecartType(tableau){
    var ecart = variance(tableau);
    return Math.sqrt(ecart);
}