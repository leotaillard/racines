<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Les Racines d'à côté</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/portrait.css" />
	<link rel="stylesheet" href="css/lightbox.css" />
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
	
	<section id="main-page" class="bg-dorothee">
		<div class="container">
			<div id="portrait">
				<div id="content">
				<h2>Dorothée</h2>
					<blockquote>" Dorothée était la dernière arrivée dans l’immeuble. Française d’origine, elle a beaucoup voyagé étant hôtesse de l’air. La Vendée lui manquait parfois, mais elle a pu retrouver un peu de son pays avec sa voisine d’à côté, <a href="claudette.php">Claudette</a>. "</blockquote>
					<ul id="dorothee" class="chapitres">
						<li data-start="35">Des racines différentes</li>
						<li data-start="179">Les racines cherchent un chez soi</li>
						<li data-start="282">Des racines à transmettre</li>
					</ul>
				</div>
				<div id="container-video">
					<video id="video-dorothee" controls="controls"> 
						 <source src="http://tm.comem.ch/racines/video/Interview_Dorothee_H264_720p.mp4" type="video/mp4" /> 
						 <source src="http://tm.comem.ch/racines/video/Interview_Dorothee_WEBM_720p.webm" type="video/webm" /> 
						 <object type="application/x-shockwave-flash" width="400" height="222" data="http://youtu.be/uEDAk6e7Rlo"> 
						  <param name="movie" value="http://youtu.be/uEDAk6e7Rlo" /> 
						  <param name="wmode" value="transparent" /> 
						  <!--[if lte IE 6 ]>
						  <embed src="http://youtu.be/uEDAk6e7Rlo" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="222"></embed>
						  <![endif]--> 
						  <p>Vous n'avez pas de navigateur moderne, ni flash d'installé sur Internet Explorer... suivez les liens ci-dessous pour télécharger les vidéos.</p> 
						 </object> 
					</video> 
				</div>
			</div>
		<ul id="content-plus" class="dorothee">
				<li>
					<h2>Vendéenne avant d’être française</h2>
				<p>Malgré le fait qu’elle ait déménagé en Suisse, Dorothée n’oublie pas ses racines vendéennes. Elle retourne régulièrement en France afin de voir sa famille. La Vendée est un département situé au bord de l’Atlantique, juste en dessous de la Bretagne. Les Vendéens sont très attachés à leur région et à leur culture. Ils ont même l’habitude de dire qu’ils sont "vendéens avant d’être français". </p>
				<p>D’ailleurs, cette région a développé ses propres expressions dont voici un petit aperçu :</p>
				<table>
						<tr>
							<th>En Vendée, on dit :</th>
							<th>En Suisse, il faut comprendre</th>
						</tr>
						<tr>
							<td>Ça me fait tord</td>
							<td>Ça me fait frissonner</td>
						</tr>
						<tr>
							<td>A c’tantôt</td>
							<td>A cet après-midi</td>
						</tr>
						<tr>
							<td>J’ai barré la porte</td>
							<td>J’ai fermé la porte à clé</td>
						</tr>
				</table>
				</li>
				<li>
					<h2>Galerie Dorothée</h2>
					<li>
					<ul id="galerie">
						<li>
							<a href="img/dorothee/easyjet.jpg" rel="lightbox[dorothee]">
								<img src="img/dorothee/p_easyjet.jpg" alt="" />
							</a>
						</li>
						<li>
							<a href="img/dorothee/Londres.jpg" rel="lightbox[dorothee]">
								<img src="img/dorothee/p_Londres.jpg" alt="" />
							</a>
						</li>
						<li>
							<a href="img/dorothee/Vendee.jpg" rel="lightbox[dorothee]">
								<img src="img/dorothee/p_Vendee.jpg" alt="" />
							</a>
						</li>
					</ul>
					
				</li>
					
				</li>
				<div class="clear"></div>
			</ul>
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
		<script>
		document.addEventListener( "DOMContentLoaded", function() {
			var popcorn = Popcorn( "#video-arnaud" );
			
			$("#banane").click(function() {
				popcorn.currentTime(10);
			});
			$("#maillot").click(function() {
				popcorn.currentTime(100);
			});
			$("#culte").click(function() {
				popcorn.currentTime(200);
			});
		//fin de la fonction			
		}, false );
	</script>      
		        
    </body>
</html>          
