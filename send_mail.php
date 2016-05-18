<?php
/**
 * Created by PhpStorm.
 * User: Amélie
 * Date: 2016-05-17
 * Time: 22:57
 */

//Check if POST array is not empty. If yes, show the user's name on the page.
//TODO: Add mailto handler if there is time + Add CAPTCHA support.
if (!empty($_POST) || isset($_POST)) {
    $message = "Merci " . $_POST['name'] . " de votre intérêt pour l'ÉTICS LAN. Nous vous répondrons sous peu.";
}
else {
    $message = "Oups! Vous êtes vous retrouvés sur cette page par erreur? Cliquez <a href='index.php'>ici</a> pour revenir à la page d'accueil";
}

?>
<!DOCTYPE html>

<!-- /**************************************************************************************************/
/* Fichier ...................... : index.html */
/* Type ......................... : Document HTML 5 */
/* Titre ........................ : Exercice JavaScript HTML5 */
/* Auteur ....................... : ©2016 Amélie Frappier, Cégep de Sherbrooke */
/* Date de création ............. : 2016-04-08 */
/* Date de mise en ligne ........ : Jamais */
/* Date de mise à jour .......... : 2016-04-08 */
/*******************************************************************************************************/
/* Exercice sur l'utilisation des Regex en JavaScript dans le cadre d'un formulaire. */
/*******************************************************************************************************/
-->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ÉTICS LAN - Index</title>
	<link rel="stylesheet" href="css/style.css" />
	<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css'>
	<style>



@media only screen and (max-width: 800px)
		{

        }

	</style>

</head>
    <body style="background-color:#3C4140"><!-- style="background-color:#3C4140" -->
		<?php include 'php\navbar.php' ?>


<div class="backgroundDiv">


    <?php include 'php\header.php' ?>

    <?php include 'php\content-mail.php' ?>


</div>


<?php include 'php\footer.php' ?>
</body>
</html>