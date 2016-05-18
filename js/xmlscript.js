/**
 * Created by Amélie on 2016-04-20.
 */

//Variables du formulaire, utilisées dans tous les champs possibles
var httpRequest;
var xmlDoc;
var gameField = document.getElementById("game");
var teamNameField = document.getElementById("teamname");
var countryField = document.getElementById("country");
var sponsorField = document.getElementById("sponsor");
var websiteField = document.getElementById("website");
var member1Fields = [document.getElementById("member1name"), document.getElementById("member1gamertag"), document.getElementById("member1role")];
var member2Fields = [document.getElementById("member2name"), document.getElementById("member2gamertag"), document.getElementById("member2role")];
var member3Fields = [document.getElementById("member3name"), document.getElementById("member3gamertag"), document.getElementById("member3role")];
var member4Fields = [document.getElementById("member4name"), document.getElementById("member4gamertag"), document.getElementById("member4role")];
var member5Fields = [document.getElementById("member5name"), document.getElementById("member5gamertag"), document.getElementById("member5role")];
var memberFields = [member1Fields, member2Fields, member3Fields, member4Fields, member5Fields];

//Initialisation de la page
generateXML();

//Génère et récupère des données dans un fichier XML
function generateXML() {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			readXML(httpRequest);
		}
	};

	httpRequest.open("GET", "xml/teamlistings.xml", true);
	httpRequest.send();
}

//Lecture des données d'un fichier XML
function readXML(xml) {

    xmlDoc = xml.responseXML;
    //var teamList = xmlDoc.getElementsByTagName("teamlistings")[0];
    var teams = xmlDoc.getElementsByTagName("team");
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

//Ajoute une équipe dans le fichier XML
//TODO: Prévoir validation des champs avant l'ajout
function addNewTeam() {
	var gameName = gameField.value;
	switch(gameName) {
		case "league":
			addNewLeagueTeam();
			break;
		case "csgo":
			addNewCSGOTeam();
			break;
		case "melee":
			addNewMeleeTeam();
			break;
		case "rocket":
			addNewRocketTeam();
			break;
	}

	//Sends file to the server
	httpRequest.open("POST", "php/send-inscription.php", true);
	httpRequest.setRequestHeader("Content-Type", "text/xml");
	httpRequest.send(xmlDoc);

	alert("Merci pour votre inscription à l'édition 2016 de l'ÉTICS LAN!");
	location.reload(true); 	//rafraichit la page
}

//Gère l'ajout d'une équipe de League of Legends
function addNewLeagueTeam() {

	//Creates a new team node
	var currentTeamList = xmlDoc.getElementsByTagName("team");
	var teamNode = xmlDoc.createElement("team");

	//Creates team settings
	var teamNameNode = xmlDoc.createElement("name");
	var teamNameTxt = xmlDoc.createTextNode(teamNameField.value);
	teamNameNode.appendChild(teamNameTxt);
	teamNode.appendChild(teamNameNode);

	//Creates game node
	var gameNameNode = xmlDoc.createElement("game");
	var gameNodeTxt = xmlDoc.createTextNode("League of Legends");
	gameNameNode.appendChild(gameNodeTxt);
	teamNode.appendChild(gameNameNode);

	var countryNode = xmlDoc.createElement("country");
	var countryNodeTxt = xmlDoc.createTextNode(countryField.value);
	countryNode.appendChild(countryNodeTxt);
	teamNode.appendChild(countryNode);

	//Creates member settings
	for (var i = 0; i < memberFields.length; i++) {
		var memberNode, nameNode, nameTxt, gamertagNode, gamertagTxt, roleNode, roleTxt;

		//If first member or other members if they are defined
		if (i == 0 || (i > 0 && memberFields[i][0].value != "")) {
			memberNode = xmlDoc.createElement("member");

			nameNode = xmlDoc.createElement("name");
			nameTxt = xmlDoc.createTextNode(memberFields[i][0].value);
			nameNode.appendChild(nameTxt);
			gamertagNode = xmlDoc.createElement("gamertag");
			gamertagTxt = xmlDoc.createTextNode(memberFields[i][1].value);
			gamertagNode.appendChild(gamertagTxt);
			roleNode = xmlDoc.createElement("role");
			roleTxt = xmlDoc.createTextNode(memberFields[i][2].value);
			roleNode.appendChild(roleTxt);

			memberNode.appendChild(nameNode);
			memberNode.appendChild(gamertagNode);
			memberNode.appendChild(roleNode);

			teamNode.appendChild(memberNode);
		}

	}

	var sponsorNode = xmlDoc.createElement("sponsor");
	var sponsorNodeTxt = xmlDoc.createTextNode(sponsorField.value);
	sponsorNode.appendChild(sponsorNodeTxt);
	teamNode.appendChild(sponsorNode);

	var websiteNode = xmlDoc.createElement("website");
	var websiteNodeTxt = xmlDoc.createTextNode(websiteField.value);
	websiteNode.appendChild(websiteNodeTxt);
	teamNode.appendChild(websiteNode);

	//Appends the new team to the end of the XML Document
	//currentTeamList.insertBefore(teamNode, currentTeamList[currentTeamList.length - 1].nextSibling);
	var teamListings = xmlDoc.getElementsByTagName("teamlistings");
	//currentTeamList[currentTeamList.length - 1].appendChild(teamNode);
	teamListings[0].appendChild(teamNode);
}

//Gère l'ajout d'une équipe de Counter-Strike
function addNewCSGOTeam() {
	//Creates a new team node
	var teamNode = xmlDoc.createElement("team");

	//Creates team settings
	var teamNameNode = xmlDoc.createElement("name");
	var teamNameTxt = xmlDoc.createTextNode(teamNameField.value);
	teamNameNode.appendChild(teamNameTxt);
	teamNode.appendChild(teamNameNode);

	//Creates game node
	var gameNameNode = xmlDoc.createElement("game");
	var gameNodeTxt = xmlDoc.createTextNode("Counter-Strike : Global Offensive");
	gameNameNode.appendChild(gameNodeTxt);
	teamNode.appendChild(gameNameNode);

	var countryNode = xmlDoc.createElement("country");
	var countryNodeTxt = xmlDoc.createTextNode(countryField.value);
	countryNode.appendChild(countryNodeTxt);
	teamNode.appendChild(countryNode);

	//Creates member settings
	for (var i = 0; i < memberFields.length; i++) {
		var memberNode, nameNode, nameTxt, gamertagNode, gamertagTxt, roleNode, roleTxt;

		//If first member or other members if they are defined
		if (i == 0 || (i > 0 && memberFields[i][0].value != "")) {
			memberNode = xmlDoc.createElement("member");

			nameNode = xmlDoc.createElement("name");
			nameTxt = xmlDoc.createTextNode(memberFields[i][0].value);
			nameNode.appendChild(nameTxt);
			gamertagNode = xmlDoc.createElement("gamertag");
			gamertagTxt = xmlDoc.createTextNode(memberFields[i][1].value);
			gamertagNode.appendChild(gamertagTxt);

			memberNode.appendChild(nameNode);
			memberNode.appendChild(gamertagNode);

			teamNode.appendChild(memberNode);
		}

	}

	var sponsorNode = xmlDoc.createElement("sponsor");
	var sponsorNodeTxt = xmlDoc.createTextNode(sponsorField.value);
	sponsorNode.appendChild(sponsorNodeTxt);
	teamNode.appendChild(sponsorNode);

	var websiteNode = xmlDoc.createElement("website");
	var websiteNodeTxt = xmlDoc.createTextNode(websiteField.value);
	websiteNode.appendChild(websiteNodeTxt);
	teamNode.appendChild(websiteNode);

	//Appends the new team to the end of the XML Document
	var teamListings = xmlDoc.getElementsByTagName("teamlistings");
	teamListings[0].appendChild(teamNode);
}

//Gère l'ajout d'une équipe de Super Smash Brothers : Melee
function addNewMeleeTeam() {
	//Creates a new team node
	var teamNode = xmlDoc.createElement("team");

	//Creates game node
	var gameNameNode = xmlDoc.createElement("game");
	var gameNodeTxt = xmlDoc.createTextNode("Super Smash Brothers : Melee");
	gameNameNode.appendChild(gameNodeTxt);
	teamNode.appendChild(gameNameNode);

	var countryNode = xmlDoc.createElement("country");
	var countryNodeTxt = xmlDoc.createTextNode(countryField.value);
	countryNode.appendChild(countryNodeTxt);
	teamNode.appendChild(countryNode);

	//Creates member settings
	for (var i = 0; i < memberFields.length; i++) {
		var memberNode, nameNode, nameTxt, gamertagNode, gamertagTxt, roleNode, roleTxt;

		//If first member or other members if they are defined
		if (i == 0 || (i > 0 && memberFields[i][0].value != "")) {
			memberNode = xmlDoc.createElement("member");

			nameNode = xmlDoc.createElement("name");
			nameTxt = xmlDoc.createTextNode(memberFields[i][0].value);
			nameNode.appendChild(nameTxt);
			gamertagNode = xmlDoc.createElement("gamertag");
			gamertagTxt = xmlDoc.createTextNode(memberFields[i][1].value);
			gamertagNode.appendChild(gamertagTxt);

			memberNode.appendChild(nameNode);
			memberNode.appendChild(gamertagNode);

			teamNode.appendChild(memberNode);
		}

	}

	//Appends the new team to the end of the XML Document
	var teamListings = xmlDoc.getElementsByTagName("teamlistings");
	teamListings[0].appendChild(teamNode);
}

//Gère l'ajout d'une équipe de Rocket League
function addNewRocketTeam() {
	//Creates a new team node
	var teamNode = xmlDoc.createElement("team");

	//Creates team settings
	var teamNameNode = xmlDoc.createElement("name");
	var teamNameTxt = xmlDoc.createTextNode(teamNameField.value);
	teamNameNode.appendChild(teamNameTxt);
	teamNode.appendChild(teamNameNode);

	//Creates game node
	var gameNameNode = xmlDoc.createElement("game");
	var gameNodeTxt = xmlDoc.createTextNode("Rocket League");
	gameNameNode.appendChild(gameNodeTxt);
	teamNode.appendChild(gameNameNode);

	var countryNode = xmlDoc.createElement("country");
	var countryNodeTxt = xmlDoc.createTextNode(countryField.value);
	countryNode.appendChild(countryNodeTxt);
	teamNode.appendChild(countryNode);

	//Creates member settings
	for (var i = 0; i < memberFields.length; i++) {
		var memberNode, nameNode, nameTxt, gamertagNode, gamertagTxt, roleNode, roleTxt;

		//If first member or other members if they are defined
		if (i == 0 || (i > 0 && memberFields[i][0].value != "")) {
			memberNode = xmlDoc.createElement("member");

			nameNode = xmlDoc.createElement("name");
			nameTxt = xmlDoc.createTextNode(memberFields[i][0].value);
			nameNode.appendChild(nameTxt);
			gamertagNode = xmlDoc.createElement("gamertag");
			gamertagTxt = xmlDoc.createTextNode(memberFields[i][1].value);
			gamertagNode.appendChild(gamertagTxt);

			memberNode.appendChild(nameNode);
			memberNode.appendChild(gamertagNode);

			teamNode.appendChild(memberNode);
		}

	}

	var sponsorNode = xmlDoc.createElement("sponsor");
	var sponsorNodeTxt = xmlDoc.createTextNode(sponsorField.value);
	sponsorNode.appendChild(sponsorNodeTxt);
	teamNode.appendChild(sponsorNode);

	var websiteNode = xmlDoc.createElement("website");
	var websiteNodeTxt = xmlDoc.createTextNode(websiteField.value);
	websiteNode.appendChild(websiteNodeTxt);
	teamNode.appendChild(websiteNode);

	//Appends the new team to the end of the XML Document
	var teamListings = xmlDoc.getElementsByTagName("teamlistings");
	teamListings[0].appendChild(teamNode);
}

function enableFormElements() {
	var gameName = gameField.value;
	switch(gameName) {
		case "league":
			enableLeagueFields();
			break;
		case "csgo":
			enableCSGOFields();
			break;
		case "melee":
			enableMeleeFields();
			break;
		case "rocket":
			enableRocketFields();
			break;
	}
}

function enableLeagueFields() {

	//Enables or disables pertinent fields and labels
	teamNameField.disabled = false;
	sponsorField.disabled = false;
	websiteField.disabled = false;
	for (var i = 0; i < memberFields.length; i++) {
		for (var j = 0; j < member2Fields.length; j++) {
			memberFields[i][j].disabled = false;
		}
	}
	emptyAllFields();
}

function enableCSGOFields() {

	//Enables or disables pertinent fields and labels
	teamNameField.disabled = false;
	sponsorField.disabled = false;
	websiteField.disabled = false;
	for (var i = 0; i < memberFields.length; i++) {
		if (i == 0) {
			memberFields[i][2].disabled = true;
		}
		else {
			for (var j = 0; j < member2Fields.length; j++) {
				if (j != 2) {
					memberFields[i][j].disabled = false;
				}
				else {
					memberFields[i][j].disabled = true;
				}
			}
		}
	}
	emptyAllFields();
}

function enableMeleeFields() {

	//Enables or disables pertinent fields and labels
	teamNameField.disabled = true;
	sponsorField.disabled = true;
	websiteField.disabled = true;
	for (var i = 0; i < memberFields.length; i++) {
		if (i == 0) {
			memberFields[i][2].disabled = true;
		}
		else {
			for (var j = 0; j < member2Fields.length; j++) {
				memberFields[i][j].disabled = true;
			}
		}
		emptyAllFields();
	}

	function enableRocketFields() {

		//Enables or disables pertinent fields and labels
		teamNameField.disabled = false;
		sponsorField.disabled = false;
		websiteField.disabled = false;
		//TODO: Correct loop 'cuz it acts weird.
		for (var i = 0; i < memberFields.length; i++) {
			if (i == 0) {
				memberFields[i][2].disabled = true;
			}
			else {
				for (var j = 0; j < member2Fields.length; j++) {
					if(i <= 2) {
						if (j != 2) {
							memberFields[i][j].disabled = false;
						}
						else {
							memberFields[i][j].disabled = true;
						}
					}
					else {
						memberFields[i][j].disabled = true;
					}
				}
			}
		}
		emptyAllFields();
	}

	function emptyAllFields() {
		teamNameField.value = "";
		countryField.value = "";
		sponsorField.value = "";
		websiteField.value = "";
		for (var i = 0; i < memberFields.length; i++) {
			for (var j = 0; j < member1Fields.length; j++) {
				if (j != 2) {
					memberFields[i][j].value = "";
				}
				else {
					memberFields[i][j].value = "Top";
				}
			}
		}
	}
}



