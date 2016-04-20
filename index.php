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
		
		.counddownHeader
		{
			padding-top:32px;
		}
		
		.counddownHeader > p
		{
			font-size:32px;
			display:inline-block;
		}
		
		.counddownHeader > div
		{
			font-weight:bold;
			font-size:32px;
			display:inline-block;
		}
		
		center > img
		{
			padding-top:32px;
			width:90%;
		}
		
		center > div
		{
			width:90%;
			color:#00DBC4;
			font-size:18px;
		}
		
		center > *
		{
			padding-top:32px;
			padding-bottom:32px;
		}
		
		@media only screen and (max-width: 800px)
		{
			.counddownHeader > p
			{
				display:block;
			}
		
			.counddownHeader > div
			{
				display:block;
			}
		}
		
	</style>
	
</head>
    <body style="background-color:#3C4140"><!-- style="background-color:#3C4140" -->
		<?php include 'php\navbar.php' ?>
		
		
		<div class="backgroundDiv">
		
		
			<?php include 'php\header.php' ?>
		
			<center style="background-color:#3C4140;
			margin-left:10%;
			margin-right:10%;
			margin-top:35px;
			border-radius:3px">
			
			
				<div class="counddownHeader">
					<p>Bientôt au jeu dans</p>
					<div id="counddown">
						<span></span><!--
						--><span></span><!--
						--><span></span><!--
						--><span></span>
					</div>
				</div>
			
				<img src="img/lan.GIF"/>
			
				<div>
					<h1>L'édition 2016 de l'ÉTICS LAN est ici!</h1>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
				</div>
			<script>
			
			//get clock fields
			var clockFields = document.getElementById("counddown").children;

			//set deadline
			var deadline = 'October 22 2016 08:00:00 UTC-05:00';
			
			
			//get time remaing into object
			function getTimeRemaining(endtime)
			{
				var t = Date.parse(endtime) - Date.parse(new Date());
				var seconds = Math.floor( (t/1000) % 60 );
				var minutes = Math.floor( (t/1000/60) % 60 );
				var hours = Math.floor( (t/(1000*60*60)) % 24 );
				var days = Math.floor( t/(1000*60*60*24) );
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
				};
			}
			
			//setup up timer event
			function initializeClock(endtime, clockFields)
			{
				//setup clock timer
				var timeinterval = setInterval(updateClockDisplay,1000,endtime, clockFields);
			}
			
			function updateClockDisplay(endtime, clockFields)
			{
					
				//get time remaning
				var t = getTimeRemaining(endtime);

				//update clock
				clockFields[0].innerHTML = ('0' + t.days).slice(-3) + "&nbspj,&nbsp";
				clockFields[1].innerHTML = ('0' + t.hours).slice(-2) + "&nbspjh,&nbsp";
				clockFields[2].innerHTML = ('0' + t.minutes).slice(-2) + "&nbspjm,&nbsp";
				clockFields[3].innerHTML = ('0' + t.seconds).slice(-2) + "&nbsps";
				
				//if clock reach 0, unhook timer
				if(t.total<=0){
					clearInterval(timeinterval);
				}
					
			}
			
			//update and start clock
			updateClockDisplay(deadline, clockFields);
			initializeClock(deadline, clockFields);
			
			
			</script>
			

			
			</center>
			
			<!-- Used to make some paddig that will not
			cut of the image -->
			<div style="height:35px;"></div>

		</div>
		
		
		<?php include 'php\footer.php' ?>	
    </body>
</html>
