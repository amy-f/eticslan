			
			
			
			
		
		<article>
			<center>
			
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
			
				<div class="bob">
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
			

			<center>
			
		</article>
			
			<!-- Used to make some paddig that will not
			cut of the image -->
			<div style="height:35px;"></div>
