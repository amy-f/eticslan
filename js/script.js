/**
 * Created by Amélie on 2016-04-20.
 */

//Initialisation de la page
generateXML();

//Lecture des données d'un fichier XML
function readXML(xml) {

    var xmlDoc = xml.responseXML;
    var teamList = xmlDoc.getElementsByTagName("teamlistings")[0];
    var teams = teamList.getElementsByTagName("team");
    generateTeamArray(teams);
}

//Génère tous les tableaux liés à chaque jeu
function generateTeamArray(teams) {
	var i, gameName;
	 for (i = 0; i < teams.length; i++) {
		gameName = teams[i].getElementsByTagName("game")[0].firstChild.nodeValue;
		switch(gameName) {
			case "League of Legends":
				generateLeagueEntry(teams[i]);
				break;
			case "Counter-Strike : Global Offensive":
				generateCSGOEntry(teams[i]);
				break;
			case "Super Smash Brothers : Melee":
				generateMeleeEntry(teams[i]);
				break;
			case "Rocket League":
				generateRocketEntry(teams[i]);
				break;
		}
	 }
}

//Génère le tableau pour les équipes de League of Legends
function generateLeagueEntry(team) {

	var i;
	var table = document.getElementById("league");
	var membersList = team.getElementsByTagName("member");

	var row = table.insertRow(1);
	var name = row.insertCell(0);
	var country = row.insertCell(1);
	var members = row.insertCell(2);
	var sponsor = row.insertCell(3);
	var website = row.insertCell(4);

	members.innerHTML = "<ul>";
	for (i = 0; i < membersList.length; i++) {
		members.innerHTML += "<li>" + membersList[i].getElementsByTagName("name")[0].firstChild.nodeValue + " - " + membersList[i].getElementsByTagName("gamertag")[0].firstChild.nodeValue + " (" + membersList[i].getElementsByTagName("role")[0].firstChild.nodeValue + ")</li>";
	}
	members.innerHTML += "</ul>";

	name.innerHTML = team.getElementsByTagName("name")[0].firstChild.nodeValue;
	country.innerHTML = team.getElementsByTagName("country")[0].firstChild.nodeValue;
	sponsor.innerHTML = team.getElementsByTagName("sponsor")[0].firstChild.nodeValue;
	website.innerHTML = "<a href='" + team.getElementsByTagName("website")[0].firstChild.nodeValue + "'>" + team.getElementsByTagName("website")[0].firstChild.nodeValue + "</a>";

}

//Génère le tableau pour les équipes de CS:GO
function generateCSGOEntry(team) {
	var i;
	var table = document.getElementById("csgo");
	var membersList = team.getElementsByTagName("member");

	var row = table.insertRow(1);
	var name = row.insertCell(0);
	var country = row.insertCell(1);
	var members = row.insertCell(2);
	var sponsor = row.insertCell(3);
	var website = row.insertCell(4);

	members.innerHTML = "<ul>";
	for (i = 0; i < membersList.length; i++) {
		members.innerHTML += "<li>" + membersList[i].getElementsByTagName("name")[0].firstChild.nodeValue + " - " + membersList[i].getElementsByTagName("gamertag")[0].firstChild.nodeValue + "</li>";
	}
	members.innerHTML += "</ul>";

	name.innerHTML = team.getElementsByTagName("name")[0].firstChild.nodeValue;
	country.innerHTML = team.getElementsByTagName("country")[0].firstChild.nodeValue;
	sponsor.innerHTML = team.getElementsByTagName("sponsor")[0].firstChild.nodeValue;
	website.innerHTML = "<a href='" + team.getElementsByTagName("website")[0].firstChild.nodeValue + "'>" + team.getElementsByTagName("website")[0].firstChild.nodeValue + "</a>";
}

//Génère le tableau pour les équipes de Super Smash Brothers : Melee
function generateMeleeEntry(team) {

	var i;
	var table = document.getElementById("melee");
	var membersList = team.getElementsByTagName("member");

	var row = table.insertRow(1);
	var name = row.insertCell(0);
	var country = row.insertCell(1)

	name.innerHTML = "<ul>";
	for (i = 0; i < membersList.length; i++) {
		name.innerHTML += "<li>" + membersList[i].getElementsByTagName("name")[0].firstChild.nodeValue + " - " + membersList[i].getElementsByTagName("gamertag")[0].firstChild.nodeValue + "</li>";
	}
	name.innerHTML += "</ul>";

	country.innerHTML = team.getElementsByTagName("country")[0].firstChild.nodeValue;
}

//Génère le tableau pour les équipes de Rocket League
function generateRocketEntry(team) {

	var i;
	var table = document.getElementById("rocket");
	var membersList = team.getElementsByTagName("member");

	var row = table.insertRow(1);
	var name = row.insertCell(0);
	var country = row.insertCell(1);
	var members = row.insertCell(2);
	var sponsor = row.insertCell(3);
	var website = row.insertCell(4);

	members.innerHTML = "<ul>";
	for (i = 0; i < membersList.length; i++) {
		members.innerHTML += "<li>" + membersList[i].getElementsByTagName("name")[0].firstChild.nodeValue + " - " + membersList[i].getElementsByTagName("gamertag")[0].firstChild.nodeValue + "</li>";
	}
	members.innerHTML += "</ul>";

	name.innerHTML = team.getElementsByTagName("name")[0].firstChild.nodeValue;
	country.innerHTML = team.getElementsByTagName("country")[0].firstChild.nodeValue;
	sponsor.innerHTML = team.getElementsByTagName("sponsor")[0].firstChild.nodeValue;
	website.innerHTML = "<a href='" + team.getElementsByTagName("website")[0].firstChild.nodeValue + "'>" + team.getElementsByTagName("website")[0].firstChild.nodeValue + "</a>";
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