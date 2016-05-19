<article>
	<div class="txt-align-center">
		<h1>Contact</h1>
	</div>
	<div class="form" class="col-11">
		<h1>Formulaire de contact</h1>
		<p>Vous pouvez remplir ce formulaire pour toutes questions, commentaires ou suggestions pour les LAN prochains et futurs. Veuillez laisser vos informations, et un organisateur vous répondra sous peu. <br/>
		Les champs suivis d'un * sont requis.</p>
			<form name="contact" id="contact" action="send_mail.php" method="post">
				<label for="name" class="col-3 col-m-4">Nom : </label><input name="name" id="name" type="text" class="col-5 col-m-7" onblur="validateIfEmptyOnBlur('name')"/> * <br/> <span id="example-name"></span><br/>
				<label for="date" class="col-3 col-m-4">Date : </label><input name="date" id="date" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(0, 'date')"/> * <br/> <span id="example-date"></span> <br/>
				<label for="email" class="col-3 col-m-4">Courriel : </label><input name="email" id="email" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(1, 'email')"/> * <br/> <span id="example-email"></span><br/>
				<label for="telephone" class="col-3 col-m-4">Téléphone : </label><input name="telephone" id="telephone" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(2, 'telephone')"/> * <br/> <span id="example-telephone"></span><br/>
				<label for="codepostal" class="col-3 col-m-4">Code postal : </label><input name="codepostal" id="codepostal" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(3, 'codepostal')"/> * <br/> <span id="example-codepostal"></span><br/>
				<label for="nas" class="col-3 col-m-4">NAS : </label><input name="nas" id="nas" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(4, 'nas')"/> * <br/> <span id="example-nas"></span><br/>
				<label for="website" class="col-3 col-m-4">Site Web : </label><input name="website" id="website" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(5, 'website')"/> * <br/> <span id="example-website"></span> <br/>
				<label for="decimal" class="col-3 col-m-4">Saissisez un nombre décimal : </label><input name="decimal" id="decimal" type="text" class="col-5 col-m-7" onblur="validateElementOnBlur(6, 'decimal')"/> * <br/> <span id="example-decimal"></span><br/>
										<label for="message" class="col-3 col-m-4">Message : </label> <br/>
				<textarea name="message" id="message" form="contact" class="col-8 col-m-11" rows="10" onblur="validateIfEmptyOnBlur('message')"></textarea> * <br/>
				<input type="button" value="Envoyer" onclick="validate()"/>
				<div><!-- Padding div --></div>
			</form>
		<div class="col-11">
			<h1>Nous joindre</h1>
			<p>Vous pouvez aussi nous contacter directement à l'adresse suivante : </p>
		</div>
	<div class="google-maps">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.9593156995707!2d-71.8880685848396!3d45.410159979100314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b3a7bd1805fd%3A0xdd364ef8277dfb76!2sC%C3%A9gep+de+Sherbrooke+Pavillon+2!5e0!3m2!1sfr!2sca!4v1463546672698" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
	</div>
</article>		
<!-- Used to make some paddig that will not
cut of the image -->
<div style="height:35px;"></div>
