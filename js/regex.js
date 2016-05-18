/**
 * Created by Amélie on 2016-04-08.
 */

//Ordre des regex :
var regexes = [
    /^(?:[(]\d{3}[)][ ]?\d{3}[-.]|\d{3}([-.])\d{3}\1)\d{4}$/,
        /^[A-Z]\d[A-Z][ -]?\d[A-Z]\d$/,
        /^\d{4}([-/])\d{1,2}\1\d{1,2}$/,
        /^\d{3}([- ]?)\d{3}\1\d{3}$/,
        /^\w+[@][a-z]+[.]\w+([.]\w+)$?/,
        /^\w+:\/\/\w+((.\w+)+)((\/\w+)+)?((.\w+)+)?$/,
        /^\d+[,.]\d+$/
];

//Retourne vrai et soumet le formulaire si réussi
//Retourne faux si le formulaire n'est pas valide
function validate() {

    //Vérifie tous les champs textes pour les valider pour de bon.
    var inputs = document.getElementsByTagName("input");
    var invalidCounter = 0;
    var champsErrones = "";
    for (var i = 0; i < (inputs.length - 1); i++) {
        if (!validateElementOnSubmit(regexes[i], inputs[i].id)) {
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
        alert("Formulaire envoyé.");
        return true;
    }

}

//Valide un élément une fois le focus sorti de la zone de texte.
function validateElementOnBlur(regexIndex, elementID) {

    //Change la couleur de la textbox
    var newColor;
    if (regexes[regexIndex].test(document.getElementById(elementID).value)) {
        newColor = "#b3ffb3";
    }
    else {
        newColor = "#ffb3b3";

        //Si non valide, affiche en plus les exemples possibles en saisie à côté de la zone de texte

        var examples = getInputExamples(elementID);
        var exampleElementID = "example-" + elementID;
        document.getElementById(exampleElementID).innerHTML = examples;
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
            examples = "(999) 999-9999, (999)999-9999, 999-999-9999, 999.999.9999, (999) 999.9999, (999)999-9999";
            break;
        case "codepostal":
            examples = "A9A 9A9, A9A9A9, A9A-9A9";
            break;
        case "date":
            examples = "AAAA/MM/JJ, AAAA-MM-JJ";
            break;
        case "nas":
            examples = "999999999, 999 999 999";
            break;
        case "courriel":
            examples = "compte@domaine.com";
            break;
        case "url":
            examples = "http://domaine.com, http://www.example.com";
            break;
        case "decimal":
            examples = "3,11, 3.11";
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
        case "courriel":
            fieldName = "Courriel";
            break;
        case "url":
            fieldName = "Site web";
            break;
        case "decimal":
            fieldName = "Nb. décimal";
            break;
    }
    return fieldName;
}