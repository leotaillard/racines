<?php require_once('includes/class.phpmailer.php'); ?>
<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Les Racines d'à côté</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/form.css" />
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="ico/favicon.png">
<!--    <link rel="apple-touch-icon" href="ico/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="ico/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="ico/apple-touch-icon-114x114.png"> -->
    
	<!--[if lt IE 9]>
	  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
    </head>
    <body>
	<!-- ici commence la structure -->
	<?php include("includes/main-nav.php"); ?>
	
	<section id="main-page">
	
		<div class="container" id="contact-page">
			<div id="about">
				<h2>Le projet Racines c'est :</h2>
				<blockquote>Les racines, ça pousse, ça vit, ça meurt, ça vibre, ça s'emmêle, bref ça se partage et donne de belles histoires...</blockquote>
				
				<p>
				Étudiants en ingénierie des médias à Yverdon en Suisse, nous vous proposons un projet transmédia sur la thématique des racines. Mêlant fiction et réalité, notre travail se veut comme ces dernières, multiforme et coloré.
				</p><p>
				Tout au long d’une histoire racontée au travers de différents médias interactifs, vous serez, cher visiteur, invité à découvrir une maison où cohabitent des racines très différentes.
				</p><p>
				Une colocation de quatre personnes, des voisins et des voisines vous accueilleront et vous feront découvrir un univers plutôt original.
				
				</p>
			</div>
			<div id="contact">
			
			<?php 
				$email = $_POST;
				if ($email == null) { ?>
				
				<form method="POST">
					<fieldset>
						<legend>Laisser nous un message</legend>
						<label>Nom*</label>
							<input type="text" placeholder="Nom" name="nom" required="required">
<!--						<span class="help-block">Example block-level help text here.</span>-->
						<label>Prénom</label>
							<input type="text" placeholder="Prénom" name="prenom">
	<!--						<span class="help-block">Example block-level help text here.</span>-->
						<label>Email*</label>
							<input type="email" placeholder="Email" name="email" required="required">
	<!--						<span class="help-block">Example block-level help text here.</span>-->
						<label>Message*</label>
							<textarea rows="6" cols="80" required="required" name="message"></textarea>
							<span class="help-block">les éléments marqués d'un * sont indispensables</span>
						<button type="submit" class="btn">Envoyer</button>
						<input type="hidden" name="robot" />
					</fieldset>
				</form>
			
			<?php
				}
				else { 
	
					foreach($_POST as $index=> $valeur) {
						$$index = (($valeur));  	  //$$index=variable spécifique
					} 	//trim permet de nettoyer la variable spécifique
					// On créé une nouvelle instance de la classe
					$mail = new PHPMailer();
					
					// De qui vient le message, e-mail puis nom
					$mail->From = $_REQUEST["email"];
					$mail->FromName = $_REQUEST["nom"].' '.$_REQUEST["prenom"];
					
					// Définition du sujet/objet
					$mail->Subject = "Un mail envoyé avec PHPMailer!";
					
					// On définit le corps du message
					$mail->Body = $_REQUEST["message"];
					
					// Il reste encore à ajouter au moins un destinataire
					// (ou plus, par plusieurs appel à cette méthode)
					$mail->AddAddress("leo.taillard@gmail.com");
					
					// Pour finir, on envoi l'e-mail
					$mail->send();
			?>
					
					
					<a href="index.php"><img src="img/merci.png" alt="" /></a>
					<h2>Merci de votre contribution</h2>
			<?php
				}
			?>
			
			</div>
			<div class="clear"></div>
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.konami.js" type="text/javascript"></script>
 	<script src="http://popcornjs.org/code/dist/popcorn-complete.js"></script>
	<script src="js/jquery.roots.js" type="text/javascript"></script>	        
    </body>
</html>          
