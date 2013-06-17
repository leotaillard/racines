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
	
	<section id="main-page" class="bg-arnaud">
		<div class="container">
			<div id="portrait">
				<div id="content">
				<h2>Alice</h2>
				<blockquote>" Alice, une grand-maman en or que j’ai connue grâce à Joao. J’ai rarement rencontré une personne qui sait si bien conter les histoires anciennes. Elle a su me faire voyager et me donner l’envie d’aller visiter son pays, la Hollande. Elle reçoit souvent la visite de <a href="mirjam.php">Mirjam</a>, sa voisine infirmière. Elles en profitent pour prendre le thé et refaire le monde."</blockquote>
					<ul id="alice" class="chapitres">
						<li data-start="14">La Hollande et les racines</li>
						<li data-start="102">Des racines libérées</li>
						<li data-start="391">La Suisse et les racines</li>
					</ul>
				</div>
				<div id="container-video">
					<video id="video-alice" controls="controls"> 
						 <source src="http://tm.comem.ch/racines/video/Interview_Alice_H264_720p.mp4" type="video/mp4" /> 
						 <source src="http://tm.comem.ch/racines/video/Interview_Alice_WEBM_720p.webm" type="video/webm" /> 
						 <object type="application/x-shockwave-flash" width="400" height="222" data="http://youtu.be/HEYiukqyAlQ"> 
						  <param name="movie" value="http://youtu.be/HEYiukqyAlQ" /> 
						  <param name="wmode" value="transparent" /> 
						  <!--[if lte IE 6 ]>
						  <embed src="http://youtu.be/HEYiukqyAlQ" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="222"></embed>
						  <![endif]--> 
						  <p>Vous n'avez pas de navigateur moderne, ni flash d'installé sur Internet Explorer... suivez les liens ci-dessous pour télécharger les vidéos.</p> 
						 </object> 
					</video>
					
				</div>
				<div class="clear"></div>
				<ul id="content-plus" class="alice">
				</ul>
			</div>
		
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
