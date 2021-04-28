var scoreTemporaire = 0;
var scoreActuel = [0, 0];
var indexPlayer = 1;
var boolPlay = true;
var numberTmp = 0;

var randomNumber = Math.floor(Math.random()*8) + 1; //génère un chiffre aléatoire entre 1 et 8

//remise à zéro des scores lors de l'affichage de la page
document.getElementsByClassName("score-1").textContent = "0";
document.getElementsByClassName("current-score-1").textContent = "0";
document.getElementsByClassName("score-2").textContent = "0";
document.getElementsByClassName("current-score-2").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function(){
    if (boolPlay == true) { // = if(boolPlay)
        var randomNumber = Math.floor(Math.random()*8) + 1;
        document.querySelector(".image-roll").src = "pics/" + randomNumber + ".png";
        // AJOUTE LE SCORE TEMPORAIRE
        if (randomNumber == 1 && numberTmp == 6) {
            scoreTemporaire = scoreTemporaire + 200;
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTemporaire;
        }else if (randomNumber == 4) {
            scoreTemporaire = scoreTemporaire + 30;
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTemporaire;
        }else if (randomNumber !=3) {
            scoreTemporaire = randomNumber;
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTemporaire;
        }else{ //image correspondante à Bruns
            indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
            scoreTemporaire = 0;
            document.querySelector(".current-score-1").textContent = "0";
            document.querySelector(".current-score-2").textContent = "0";
            
            var element1 = document.querySelector(".part1").firstChild;
            var element2 = document.querySelector(".part2").firstChild;
    
            element1.classList.toggle("active");
            element2.classList.toggle("active");
        }
        numberTemp = randomNumber;
    }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if (boolPlay == true) {
        scoreActuel[indexPlayer - 1] += scoreTemporaire;
        document.querySelector(".score-" + indexPlayer).textContent = scoreActuel[indexPlayer - 1];
    
        //partie finie si le score est >= 200
        if (scoreActuel[indexPlayer - 1] >= 200) {
            document.querySelector(".name-" + indexPlayer).textContent = "WINNER !";
            //une fois gagné on enlève les points blancs
            var element1 = document.querySelector(".part1").firstChild;
            var element2 = document.querySelector(".part2").firstChild;
            element1.classList.remove("active");
            element2.classList.remove("active");
            
            //fin de partie
            boolPlay = false;
        }else{
            indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
            scoreTemporaire = 0;
            document.querySelector(".current-score-1").textContent = "0";
            document.querySelector(".current-score-2").textContent = "0";
            
            var element1 = document.querySelector(".part1").firstChild;
            var element2 = document.querySelector(".part2").firstChild;
    
            element1.classList.toggle("active");
            element2.classList.toggle("active");
        }
    }
});






