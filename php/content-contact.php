<article>
	<div id="contact-form">
		<h1>Contact</h1>
			<form name="contact" action="send_mail.php" method="post">
				<label for="date">Date : </label><input name="date" type="text"/> <br/>
				<label for="name">Nom : </label><input name="name" type="text"/> <br/>
				<label for="email">Courriel : </label><input name="email" type="text"/> <br/>
				<label for="telephone">Téléphone : </label><input name="telephone" type="text"/> <br/>
				<label for="codepostal">Code postal : </label><input name="codepostal" type="text"/> <br/>
				<label for="nas">NAS : </label><input name="nas" type="text"/> <br/>
				<label for="website">Site Web : </label><input name="website" type="text"/> <br/>
				<label for="decimal">Saissisez un nombre décimal : </label><input name="decimal" type="text"/> <br/>
				<textarea name="message" form="contact" rows="4" cols="50">
					
				</textarea> 
				<input type="submit" value="Envoyer"/>
			</form>
	</div>
</article>		
<!-- Used to make some paddig that will not
cut of the image -->
<div style="height:35px;"></div>
