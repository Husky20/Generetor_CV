<!DOCTYPE html>
<html lang="pl">
<head>

	<meta charset="utf-8">
	<title>Formularz</title>
	<link rel="stylesheet" href="main.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=latin-ext" rel="stylesheet">	
	<script src ="JS.js"></script>
</head>

<body onload="onload()">
	<header>	
		<h1>Wpełnij dane niezbędne do CV</h1>
	</header>
	<main>
		<article>
			<form id="myForm" action="CV.html" method="post" enctype="multipart/form-data" onsubmit="return false;">

				<!-----Personalia----->
				<div id="p">
					<fieldset>
						<legend>Personalia:</legend>
						<table>
							<tr>
								<td>Imię:</td><td><input type="text" id="imie" required></td>
							</tr>
							<tr>
								<td>Nazwisko:</td>
								<td><input type="text" id="nazwisko" required></td>
							</tr>
							<tr>	
								<td>e-mail:</td>
								<td><input type="email" id="email" required></td>
							</tr>
							<tr>	
								<td>tel.:</td>
								<td><input type="tel" id = "tel" pattern="[0-9]{9}" required></td>
							</tr>
							<tr>	
								<td>linked.in/ github:</td>
								<td><input type="text" name="link" id = "link" required></td>
							</tr>
							<tr><td colspan="2"><input type="file" id="foto" accept="image/jpeg,image/gif,image/png,image/pdf" required></td></tr>
						</table></fieldset></div>

				<!-----Zainteresowania----->
					<fieldset>
						<legend>Zainteresowania:</legend>

							<div id="z1" ><tr><table style="margin-bottom:40px;">
								<tr><td>Wybierz:</td>
									<td colspan="3" align = "left">
										<select id = "h1">
											<option> </option>
											<option>Nowe technologie</option>
											<option>Gry</option>
											<option>Filmy</option>
											<option>Origmi</option>
											<option>Muzyka</option>
											<option>Zdrowy tryb życia</option>
										</select></td></tr>
								<tr><td>Dodaj:</td>
								<td><input type="text" name="hobby" id="h2"></input></td></tr>
							</table>
							</div>

							<div id="z2" style="display:none;"><tr><table style="margin-bottom:40px;">
								<tr><td>Wybierz:</td>
									<td colspan="3" align = "left">
										<select id = "h3" >
											<option> </option>
											<option>Nowe technologie</option>
											<option>Gry</option>
											<option>Filmy</option>
											<option>Origmi</option>
											<option>Muzyka</option>
											<option>Zdrowy tryb życia</option>
										</select></td></tr>
								<tr><td>Dodaj:</td>
								<td><input type="text" name="hobby" id="h4"></input></td></tr>
							</table>
							</div>
							<input style= "float:right; margin-right:50px;margin-top:-20px;" type="button" value ="+" onclick="addh()">

					</fieldset>

				<!-----Doświadczenie----->
						<fieldset>
							<legend>Doświadczenie</legend>

							<div id="d1"><table style="margin-bottom:40px;">
									<tr><td>Stanowisko:</td>
										<td><input type="text" id="stanowisko1" required></td>
									</tr><tr>
										<td>Firma:</td>
										<td><input type="text" name="firma" id="firma1" required></td>
									</tr><tr>
										<td>Lokalizacja:</td>
										<td><input type="text" name="lokalizacja" id="lokalizacja1" required></td>
									</tr><tr>
										<td>Data razpoczęcia:</td>
										<td><input type="date" name="data_r" id="data_r1" required></td>
									</tr><tr>
										<td>Data zakończenia:</td>
										<td><input type="date" name="data_z" id="data_z1" required> </td>
									</tr><tr>
										<td>Opis:</td>
								<td><textarea rows="4" cols="20" name="opis" id="opis1" maxlength="70" required></textarea></td></tr>
								</table>
							</div>

							<div id="d2" style="display:none;"><table style="margin-bottom:40px;">
									<tr><td>Stanowisko:</td>
										<td><input type="text" id="stanowisko2"></td>
									</tr><tr>
										<td>Firma:</td>
										<td><input type="text" name="firma" id="firma2"></td>
									</tr><tr>
										<td>Lokalizacja:</td>
										<td><input type="text" name="lokalizacja" id="lokalizacja2"></td>
									</tr><tr>
										<td>Data razpoczęcia:</td>
										<td><input type="date" name="data_r" id="data_r2" ></td>
									</tr><tr>
										<td>Data zakończenia:</td>
										<td><input type="date" name="data_z" id="data_z2"> </td>
									</tr><tr>
										<td>Opis:</td>
								<td><textarea rows="4" cols="20" name="opis" id="opis2" maxlength="70"></textarea></td></tr>
								</table>
							</div>

							<div id="d3" style="display:none;"><table style="margin-bottom:40px;">
									<tr><td>Stanowisko:</td>
										<td><input type="text" id="stanowisko3"></td>
									</tr><tr>
										<td>Firma:</td>
										<td><input type="text" name="firma" id="firma3"></td>
									</tr><tr>
										<td>Lokalizacja:</td>
										<td><input type="text" name="lokalizacja" id="lokalizacja3"></td>
									</tr><tr>
										<td>Data razpoczęcia:</td>
										<td><input type="date" name="data_r" id="data_r3" ></td>
									</tr><tr>
										<td>Data zakończenia:</td>
										<td><input type="date" name="data_z" id="data_z3"> </td>
									</tr><tr>
										<td>Opis:</td>
								<td><textarea rows="4" cols="20" name="opis" id="opis3" maxlength="70"></textarea></td></tr>
								</table>
							</div>
							<input style= "float:right; margin-right:50px;" type="button" value ="+" onclick="addd()">

						</fieldset>

				<!-----Wykształcenie----->
						<fieldset>
							<legend>Wykształcenie</legend>

							<div id="w1"><table style="margin-bottom:40px;" required>
								<tr>
								</tr><tr><td>Nazwa szkoły:</td>
									<td><input type="text" name="nazwa_sz" id="nazwa_sz1" required></input></td>
								</tr><tr>
									<td>Kirunek:</td>
									<td><input type="text" id="kierunek1" required></td>
								</tr><tr>
									<td>Specjalizacja:</td>
									<td><input type="text" id="specjalizacja1" required></td>
								</tr><tr>
									<td>Data razpoczęcia:</td>
									<td><input type="date" id="data_r_sz1" required></td>
								</tr><tr>
									<td>Data zakończenia:</td>
									<td><input type="date" id="data_z_sz1"> </td>
								</tr></td>
								</table></div>
						</fieldset>

				<!-----Kursy----->
						<fieldset>
							<legend>Szkolenia/ Kursy/ Certyfikaty/ Konferencje/ Publikacje i Inne</legend>

							<div id="k1"><table style= "margin-bottom:20px;"><tr><td>Nazwa:</td>
									<td><input type="text" id="nazwa_ce1" required></td>
								</tr>
								</table></div>

							<div id="k2" style="display:none;"><table style="margin-bottom:20px;"><tr><td>Nazwa:</td>
									<td><input type="text" id="nazwa_ce2"></td>
								</tr>
								</table></div>

							<div id="k3" style="display:none;"><table style="margin-bottom:20px;"><tr><td>Nazwa:</td>
									<td><input type="text" id="nazwa_ce3"></td>
								</tr>
								</table></div>

							<div id="k4" style="display:none;"><table style="margin-bottom:20px;"><tr><td>Nazwa:</td>
									<td><input type="text" id="nazwa_ce4"></td>
								</tr>
								</table></div>

							<div id="k5" style="display:none;"><table style="margin-bottom:20px;"><tr><td>Nazwa:</td>
									<td><input type="text" id="nazwa_ce5"></td>
								</tr>
								</table></div>

							<input style= "float:right; margin-right:50px;" type="button" value ="+" onclick="addkurs()">

						</fieldset>

				<!-----Języki----->
						<fieldset>
							<legend>Języki:</legend>

							<div id="j1"><table style= "margin: 0 auto;">
								<tr><td colspan="3" align = "left">
									<select id = "jezyk1" required>
										<option> </option>
										<option>Angielski</option>
										<option>Rosyjski</option>
										<option>Włoski</option>
										<option>Ukraiński</option>
										<option>Francuski</option>
										<option>Niemiecki</option>
									</select>
									<select type="option" name="p" id = "poziom01" required>
										<option> </option>
										<option>A1</option>
										<option>A2</option>
										<option>B1</option>
										<option>B2</option>
										<option>C1</option>
										<option>C2</option>
									</select>
							</table></div>

							<div id="j2" style="display:none;"><table style= "margin: 0 auto;">
								<tr><td colspan="3" align = "left">
									<select id = "jezyk2" >
										<option> </option>
										<option>Angielski</option>
										<option>Rosyjski</option>
										<option>Włoski</option>
										<option>Ukraiński</option>
										<option>Francuski</option>
										<option>Niemiecki</option>
									</select>
									<select type="option" name="poziom" id = "poziom02">
										<option> </option>
										<option>A1</option>
										<option>A2</option>
										<option>B1</option>
										<option>B2</option>
										<option>C1</option>
										<option>C2</option>
									</select>
							</table></div>

							<div id="j3" style="display:none;"><table style= "margin: 0 auto;">
								<tr><td colspan="3" align = "left">
									<select id = "jezyk3" >
										<option> </option>
										<option>Angielski</option>
										<option>Rosyjski</option>
										<option>Włoski</option>
										<option>Ukraiński</option>
										<option>Francuski</option>
										<option>Niemiecki</option>
									</select>
									<select type="option" name="poziom" id = "poziom03">
										<option> </option>
										<option>A1</option>
										<option>A2</option>
										<option>B1</option>
										<option>B2</option>
										<option>C1</option>
										<option>C2</option>
									</select>
							</table></div>
							<input style= "float:right; margin-right:50px;" type="button" value ="+" onclick="addjezyk()">
						</fieldset>

				<!-----Umiejętności----->
				      <div id = "dom" style="display: none;">
				        <pre><?php
								$link = $_POST["link"];
								require('simplehtmldom_1_5/simple_html_dom.php');
								$html = file_get_html($link);
								if(!$html){
									die('Error');
								}
								for($i = 0; $i<30; $i++){
									$umiejetnosc  = $html->find(".technology",$i)->innertext;
									if( $umiejetnosc  == '' )break;
									else $info[$i] = $umiejetnosc;
								}
								print_r($info);
								echo htmlspecialchars($info);
				        ?>
				      </div>
						<fieldset>
							<div class="6"><table>
							<legend>Umiejętności i programy</legend>
							<tbody id ="tabela">

							</tbody>
						</table></div></fieldset>
				<!-----Przyciski----->
						<table style= "margin: 0 auto;">
							<tr>
								<td>
									<input id="wyslij" type="submit" value="Wyślij" class="button button1" onclick="indeks()" />
								</td>
								<td>
									<input id="wyczysc" class="button button1" type="reset" value="Wyczyść">
								</td>
							</tr>
							
						</table>
						
			</form>					
		</article>

	</main>
	<input type="submit" value="1111" onclick="Formularz()" style="display:none;">
</body>
</html>