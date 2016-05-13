/**
 * Created by Amélie on 2016-04-20.
 */

//Initialisation de la page
var entryID = 0;
var adresses;
generateXML();

//Lecture des données d'un fichier XML
function readXML(xml) {

    var xmlDoc = xml.responseXML;
    var carnet = xmlDoc.getElementsByTagName("carnet")[0];
    adresses = carnet.getElementsByTagName("contact");
    generateTeamArray();
}

//Génère tous les tableaux liés à chaque jeu
function generateTeamArray() {
    document.getElementById("output").innerHTML = "Nom : ";
    document.getElementById("output").innerHTML += adresses[entryID].getElementsByTagName("nom")[0].childNodes[0].nodeValue + "<br/>";
    document.getElementById("output").innerHTML += "Adresse : ";
    document.getElementById("output").innerHTML += adresses[entryID].getElementsByTagName("adresse")[0].childNodes[0].nodeValue + "<br/>";
    document.getElementById("output").innerHTML += "Ville : ";
    document.getElementById("output").innerHTML += adresses[entryID].getElementsByTagName("ville")[0].childNodes[0].nodeValue + "<br/>";
    document.getElementById("output").innerHTML += "Province : ";
    document.getElementById("output").innerHTML += adresses[entryID].getElementsByTagName("province")[0].childNodes[0].nodeValue + "<br/>";
    document.getElementById("output").innerHTML += "Code postal : ";
    document.getElementById("output").innerHTML += adresses[entryID].getElementsByTagName("codepostal")[0].childNodes[0].nodeValue + "<br/>";

}

//Génère le tableau pour les équipes de League of Legends
function generateLeagueArray() {

}

//Génère le tableau pour les équipes de CS:GO
function generateCSGOArray() {

}

//Génère le tableau pour les équipes de Super Smash Brothers : Melee
function generateMeleeArray() {

}

//Génère le tableau pour les équipes de Rocket League
function generateRocketArray() {

}

//Génère et récupère des données dans un fichier XML
function generateXML() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            readXML(httpRequest);
        }
    };

    httpRequest.open("GET", "xml/teamlistings.xml", true);
    httpRequest.send();
}