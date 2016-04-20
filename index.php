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
		
		@media only screen and (max-width: 800px)
		{
			
		}
	</style>
	
</head>
    <body style="background-color:#3C4140"><!-- style="background-color:#3C4140" -->
		<?php include 'php\navbar.php' ?>
		
		
		<div class="backgroundDiv">
		
		
			<?php include 'php\header.php' ?>
		
			<center style="background-color:#3C4140;
			height:300px;
			margin-left:10%;
			margin-right:10%;
			margin-top:35px;
			border-radius:3px">
			
			<p id="cl"></p>
			<script>
			
			var deadline = 'October 22 2016 08:00:00 UTC-05:00';
			
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
			
			function initializeClock(id, endtime)
			{
				var clock = document.getElementById(id);
				var timeinterval = setInterval(function(){
					var t = getTimeRemaining(endtime);
					clock.innerHTML = 'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
					if(t.total<=0){
						clearInterval(timeinterval);
					}
				},1000);
			}
			
			//http://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
			
			initializeClock("cl", deadline);
			
			
			</script>
			

			
			</center>
			
			<!-- Used to make some paddig that will not
			cut of the image -->
			<div style="height:35px;"></div>

		</div>
		
		
		<?php include 'php\footer.php' ?>	
    </body>
</html>
