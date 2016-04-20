<?php
/**
 * Created by PhpStorm.
 * User: Amélie
 * Date: 2016-04-15
 * Time: 12:27
 */
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
    <title>ÉTICS LAN - Index</title>
	<link rel="stylesheet" href="css/style.css" />

	<style>
		.backgroundDiv
		{
			background-color:#000000;
			background-image:url(img/controller2.bmp);
			background-size:100%;
			background-repeat: no-repeat;
		}
		
		header
		{
			padding-left:10%;
			padding-right:10%;
			padding-top:60px;
		}
		
		.eticsLogo
		{
			width:20%;
		}
		
		.microboutiqueLogo
		{
			width:12%;
			float:right;
			padding-top:35px;
		}
		
		.oeildechat
		{
			width:20%;
			float:right;
			padding-top:30px;
		}
	</style>
	
</head>
    <body style="background-color:#3C4140"><!-- style="background-color:#3C4140" -->
		<?php include 'php\navbar.php' ?>
		
		
		<div class="backgroundDiv">
		
		
			<header>
			
				<img src="img/logolan.png" class="eticsLogo"/>
				
				<img src="img/oeildechat.png" class="microboutiqueLogo"/>
				<img src="img/microboutique.png" class="oeildechat"/>

			
			
			</header>
		
		
		</div>
		
		
		<?php include 'php\footer.php' ?>	
    </body>
</html>
