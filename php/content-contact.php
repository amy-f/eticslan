<article>
	<div class="txt-align-center">
		<h1>Contact</h1>
	</div>
	<div class="form" class="col-11">
		<p>Vous pouvez remplir ce formulaire pour toutes questions, commentaires ou suggestions pour les LAN prochains et futurs. Veuillez laisser vos informations, et un organisateur vous répondra sous peu. <br/>
		Les champs suivis d'un * sont requis.</p>
			<form name="contact" action="send_mail.php" method="post">
				<label for="name" class="col-3 col-m-4">Nom : </label><input name="name" type="text" class="col-5" /> * <span id="example-name"></span><br/>
				<label for="date" class="col-3 col-m-4">Date : </label><input name="date" type="text" class="col-5"/> * <span id="example-date"></span> <br/>
				<label for="email" class="col-3 col-m-4">Courriel : </label><input name="email" type="text" class="col-5"/> * <span id="example-email"><br/>
				<label for="telephone" class="col-3 col-m-4">Téléphone : </label><input name="telephone" type="text" class="col-5"/> * <span id="example-telephone"><br/>
				<label for="codepostal" class="col-3 col-m-4">Code postal : </label><input name="codepostal" type="text" class="col-5"/> * <span id="example-codepostal"><br/>
				<label for="nas" class="col-3 col-m-4">NAS : </label><input name="nas" type="text" class="col-5"/> * <span id="example-nas"><br/>
				<label for="website" class="col-3 col-m-4">Site Web : </label><input name="website" type="text" class="col-5"/> * <span id="example-website"> <br/>
				<label for="decimal" class="col-3 col-m-4">Saissisez un nombre décimal : </label><input name="decimal" type="text" class="col-5"/> * <span id="example-decimal"><br/>
										<label for="message" class="col-3 col-m-4">Message : </label> <br/>
				<textarea name="message" form="contact" class="col-8 col-m-9" rows="10"></textarea> * <br/>
				<input type="submit" value="Envoyer"/>
				<div><!-- Padding div --></div>
			</form>
	</div>
</article>		
<!-- Used to make some paddig that will not
cut of the image -->
<div style="height:35px;"></div>
