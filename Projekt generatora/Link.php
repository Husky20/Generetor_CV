<!DOCTYPE HTML> 
<html lang="pl">

<head>
<meta charset="utf-8"/>
	<title> Link </title>
	<script  src="JS.js"></script>
	<link rel="stylesheet" href="main.css">
	<link href='http://fonts.googleapis.com/css?family=Lato|Josefin+Sans&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
</head>

<body class="link">
	<div class = "conteiner">
		<h1>Podaj adres strony internetowej zawierającej ogłoszenie, na które chcesz aplikować</h1>
        <form action="Formularz.php" method="post">
            <input type="url" id = "link" name = "link" class="l"required></input><br>
            <input type="submit" id = "next" class="button button1" value="Dalej" ></input>
        </form>
	</div>
</body>
</html>


