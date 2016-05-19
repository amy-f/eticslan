/**
 * Created by Amélie on 2016-04-08.
 */

//Ordre des regex : date, email, telephone, code postal, nas, site Web, nombre décimal
var regexes = [
    /^((19[0-9][0-9])|(20[0-9][0-9]))[-/]((1[0-2])|(0[1-9]))[-/](([1-3][0-9])|(0[1-9]))|(([1-3][0-9])|((0[1-9])|[1-9])) (janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre) ((19[0-9][0-9])|(20[0-9][0-9]))$/,
        /^.+@((((([12][0-5][0-5])|(\d\d)|\d)\.){3}(([12][0-5][0-5])|(\d\d)|\d))|([A-Za-z]+(\.[A-Za-z]+)+))$/,
        /^\(\d{3}\) ?\d{3}(?:-|\.)\d{4}|\d{3}(-|\.)\d{3}\1\d{4}|\d{3}(?:-|\.)\d{4}$/,
        /^[A-Z,a-z]\d[A-Z,a-z](-| )?\d[A-Z,a-z]\d$/,
        /^(\d{3}[ -]?){2}\d{3}$/,
        /^\w+:\/\/((www\.)?\w+\.([A-Z,a-z]+\.)*[A-Z,a-z]+|((([12][0-5][0-5])|(\d\d)|\d)\.){3}(([12][0-5][0-5])|(\d\d)|\d))$/,
        /^[+\-]?((\d+\.)|\.)?\d+$/
];

//Retourne vrai et soumet le formulaire si réussi
//Retourne faux si le formulaire n'est pas valide
function validate() {

    //Vérifie tous les champs textes pour les valider pour de bon.
    var inputs = document.getElementsByTagName("input");
    var invalidCounter = 0;
    var champsErrones = "";

    //Vérifie si les champs Nom et Message sont vides
    if (document.getElementById("name").value == "") {
        champsErrones += "Nom ";
    }

    if (document.getElementById("message").value == "") {
        champsErrones += "Message "
    }

    //Vérifie les valeurs des regex
    for (var i = 1; i < (inputs.length - 1); i++) {
        if (!validateElementOnSubmit(regexes[(i - 1)], inputs[i].id)) {
            invalidCounter++;
            champsErrones += getInvalidFieldName(inputs[i].id);
            champsErrones += " ";
        }
    }

    //Si l'une des valeurs est non valide, affiche une alerte ou redirige vers une autre page
    if (invalidCounter > 0) {
        alert("Les champs suivants sont invalides : \n" + champsErrones);
        return false;
    }
    else {
        document.getElementById("contact").submit();
        return true;
    }

}
//Valide si un élément est vide ou non lorsque l'on perd le focus
function validateIfEmptyOnBlur(elementID) {
    //Change la couleur de la textbox
    var newColor;
    if (document.getElementById(elementID).value != "") {
        newColor = "#b3ffb3";
    }
    else {
        newColor = "#ffb3b3";
    }

    document.getElementById(elementID).style.backgroundColor = newColor;
}

//Valide un élément une fois le focus sorti de la zone de texte.
function validateElementOnBlur(regexIndex, elementID) {

    //Change la couleur de la textbox
    var newColor;
    var exampleElementID = "example-" + elementID;
    if (regexes[regexIndex].test(document.getElementById(elementID).value)) {
        newColor = "#b3ffb3";
        document.getElementById(exampleElementID).innerHTML = "";
    }
    else {
        newColor = "#ffb3b3";

        //Si non valide, affiche en plus les exemples possibles en saisie à côté de la zone de texte
        document.getElementById(exampleElementID).innerHTML = getInputExamples(elementID);
    }

    document.getElementById(elementID).style.backgroundColor = newColor;
}

//Valide un élément après avoir réalisé un submit
function validateElementOnSubmit(regex, elementID) {

    //Retourne si l'élément est valide ou non
    return regex.test(document.getElementById(elementID).value);
}

//Ajoute un exemple de saisie s'il y a erreur.
function getInputExamples(elementID) {
    var examples;
    switch (elementID) {
        case "telephone":
            examples = "(999) 999-9999, (999)999-9999, (999) 999.9999, (999)999.9999, 999.999.9999, 999-999-9999, 999.9999, 999-9999";
            break;
        case "codepostal":
            examples = "A9A 9A9, A9A9A9, A9A-9A9";
            break;
        case "date":
            examples = "AAAA-MM-JJ, AAAA/MM/JJ, J MMMM AAAA, JJ MMMM AAAA";
            break;
        case "nas":
            examples = "999999999, 999 999 999, 999-999-999";
            break;
        case "email":
            examples = "compte@domaine.com, compte@255.255.255.0";
            break;
        case "website":
            examples = "protocole://adresse";
            break;
        case "decimal":
            examples = "999, 3.11";
            break;
    }
    return examples;
}

//Retourne le nom du champ invalide.
function getInvalidFieldName(elementID) {
    var fieldName;
    switch (elementID) {
        case "telephone":
            fieldName = "Téléphone";
            break;
        case "codepostal":
            fieldName = "Code postal";
            break;
        case "date":
            fieldName = "Date";
            break;
        case "nas":
            fieldName = "NAS";
            break;
        case "email":
            fieldName = "Courriel";
            break;
        case "website":
            fieldName = "Site web";
            break;
        case "decimal":
            fieldName = "Nb. décimal";
            break;
    }
    return fieldName;
}