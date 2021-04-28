var bool = true;
var bool2 = true

document.getElementById("valider").addEventListener("click", function(){
    if (bool == true) { //ici c'est pour éviter de pouvoir cliquer sur valider une fois que le triangle est déjà affiché
        var taille = document.getElementById("infos").value;
        afficherTriangle(trianglePascal(taille));        
        bool = false;
    }
});

document.getElementById("valider-1").addEventListener("click", function(){
    if (bool2 == true) {
        var numero = document.getElementById("stern").value;
        afficherStern(stern(numero));
        bool2 = false;
    }
});

document.getElementById("retry").addEventListener("click", function(){
    document.location.reload(true);
});

document.getElementById("retry-1").addEventListener("click", function(){
    document.location.reload(true);
});


/* FONCTIONS POUR LE TRIANGLE DE PASCAL */

function trianglePascal(taille){
    var tab = new Array(); //équivalent à [];
    for (var i = 0; i < taille; i++) { //parcours le nombre de ligne / i = aux lignes (voir image sur google)
        tab[i] = new Array();
        for (var j = 0; j < i + 1; j++) { //j = aux colonnes
            if (j == 0 || j == i) {
                tab[i][j] = 1;
            }else{
                tab[i][j] = tab[i-1][j] + tab[i-1][j-1];
            }
            
        }
    }
    return tab;
}

function afficherTriangle(tableau){
    for (var i = 0; i < tableau.length; i++) {
        for (var j = 0; j < tableau[i].length; j++) {
            document.getElementById("res").innerHTML += tableau[i][j] + " ";
        }

        document.getElementById("res").innerHTML += "<br>";
    }
}

/* FONCTIONS DE LA SUITE DE STERN */

function stern(numero){
    var tab1 = trianglePascal(numero + 100);
    var tab2 = [];
    
    tab2.push(1); //on entre les premières
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
    // ici tab2 = [1,1,2,1];

    for (var i = 4; i < numero; i++) {
        var sum = 0;
        var valeurEntiere = Math.trunc(i/2);
        for (var j = 0; j < valeurEntiere + 1; j++) {
            sum = sum + tab1[i-j][j]%2;
        }
        tab2.push(sum);
    }
    return tab2;
}

function afficherStern(tableau){
    for (var i = 0; i < tableau.length; i++) {
        var u = i + 1;
        document.getElementById("stern-res").innerHTML += "S" + u + "=" + tableau[i] + " ";
    }
}