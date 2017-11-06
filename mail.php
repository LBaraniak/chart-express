<?php
    $to = "biuro@chart-express.pl";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $message = $_REQUEST['message'];

			$od = 'MIME-Version: 1.0'."\r\n";
			$od .= 'Content-type: text/html; charset=UTF-8'."\r\n";
			// $od .= "From: chart-express.pl \r\n";

			$tytul = "Nowe zaptanie ze strony Chart-express.pl - $what";
			$wiadomosc = "<html>
							<head>
							<meta charset='UTF-8'>
							</head>
							<body>
							<h2>Nowa wiadomość ze strony Chart-express.pl</h2>

              <p><b>Imię:</b><br>$name</p>
              <p><b>Email:</b><br>$from</p>
              <p><b>Wiadomość:</b><br>$message</p>

							</body>
							</html>";


			$send = mail($to, $tytul, $wiadomosc, $od, "-f biuro@chart-express.pl");
?>
