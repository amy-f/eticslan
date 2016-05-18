<article>

	<div class="txt-align-center">
		<h1>Inscriptions</h1>
	</div>
	
	<div id="inscription-teamlist" class="col-10">
		<h3>League of Legends</h3>
		<table id="league">
			<tr id="league-header">
				<th>Nom</th>
				<th>Pays</th>
				<th>Membres</th>
				<th>Commanditaire</th>
				<th>Site Web</th>
			</tr>
		</table>
		<h3>Counter Strike : Global Offensive</h3>
		<table id="csgo">
			<tr>
				<th>Nom</th>
				<th>Pays</th>
				<th>Membres</th>
				<th>Commanditaire</th>
				<th>Site Web</th>
			</tr>
		</table>
		<h3>Super Smash Brothers : Melee</h3>
		<table id="melee">
			<tr>
				<th>Nom</th>
				<th>Pays</th>
			</tr>
		</table>
		<h3>Rocket League</h3>
		<table id="rocket">
			<tr>
				<th>Nom</th>
				<th>Pays</th>
				<th>Membres</th>
				<th>Commanditaire</th>
				<th>Site Web</th>
			</tr>
		</table>
	</div>
	
	<div class="form">
		<h1 id="inscription-anchor">Vous inscrire</h1>
		<form name="inscription" method="post">
			<label for="game">Jeu : </label>
			<select name="game" id="game">
				<option value="league">League of Legends</option>
				<option value="csgo">Counter Strike : Global Offensive</option>
				<option value="melee">Super Smash Brothers : Melee</option>
				<option value="rocket">Rocket League</option>
			</select><br/>
			<br/> <!-- Remove after tests and make CSS instead -->
			<label for="teamname">Nom de l'équipe : </label><input name="teamname" id="teamname" type="text"/> <br/>
			<label for="country">Pays d'origine : </label><input name="country" id="country" type="text"/> <br/>
			<label>Joueur(s):</label> <br/>
			<ul id="members">
				<li id="member1"><label for="member1name">Nom : </label> <input name="member1name" id="member1name" type="text">
					<label for="member1gamertag">Gamertag : </label> <input name="member1gamertag" id="member1gamertag" type="text">
					<label for="member1role">Rôle : </label>
					<select name="member1role" id="member1role" type="text">
						<option value="Top">Top</option>
						<option value="Jungler">Jungler</option>
						<option value="Mid">Mid</option>
						<option value="AD Carry">AD Carry</option>
						<option value="Support">Support</option>
					</select></li>
				<li id="member2"><label for="member2name">Nom : </label> <input name="member2name" id="member2name" type="text">
					<label for="member2gamertag">Gamertag : </label> <input name="member2gamertag" id="member2gamertag" type="text">
					<label for="member2role">Rôle : </label>
					<select name="member2role" id="member2role" type="text">
						<option value="Top">Top</option>
						<option value="Jungler">Jungler</option>
						<option value="Mid">Mid</option>
						<option value="AD Carry">AD Carry</option>
						<option value="Support">Support</option>
					</select></li>
				<li id="member3"><label for="member3name">Nom : </label> <input name="member3name" id="member3name" type="text">
					<label for="member3gamertag">Gamertag : </label> <input name="member3gamertag" id="member3gamertag" type="text">
					<label for="member3role">Rôle : </label>
					<select name="member3role" id="member3role" type="text">
						<option value="Top">Top</option>
						<option value="Jungler">Jungler</option>
						<option value="Mid">Mid</option>
						<option value="AD Carry">AD Carry</option>
						<option value="Support">Support</option>
					</select></li>
				<li id="member4"><label for="member4name">Nom : </label> <input name="member4name" id="member4name" type="text">
					<label for="member4gamertag">Gamertag : </label> <input name="member4gamertag" id="member4gamertag" type="text">
					<label for="member4role">Rôle : </label>
					<select name="member4role" id="member4role" type="text">
						<option value="Top">Top</option>
						<option value="Jungler">Jungler</option>
						<option value="Mid">Mid</option>
						<option value="AD Carry">AD Carry</option>
						<option value="Support">Support</option>
					</select></li>
				<li id="member5"><label for="member5name">Nom : </label> <input name="member5name" id="member5name" type="text">
					<label for="member5gamertag">Gamertag : </label> <input name="member5gamertag" id="member5gamertag"type="text">
					<label for="member5role">Rôle : </label>
					<select name="member5role" id="member5role" type="text">
						<option value="Top">Top</option>
						<option value="Jungler">Jungler</option>
						<option value="Mid">Mid</option>
						<option value="AD Carry">AD Carry</option>
						<option value="Support">Support</option>
					</select></li>
			</ul>
			<label for="sponsor">Commanditaire principal : </label> <input name="sponsor" id="sponsor" type="text"> <br/>
			<label for="website">Site Web : </label> <input name="website" id="website" type="text"> <br/>
			<br/>
			<input type="submit" value="Envoyer" onclick="addNewTeam();"/>
			<div><!-- Padding div --></div>
		</form>
	</div>
			
						
</article>
				
<!-- Used to make some paddig that will not
cut of the image -->
<div style="height:35px;"></div>

<script type="text/javascript" src="js/xmlscript.js"></script>
