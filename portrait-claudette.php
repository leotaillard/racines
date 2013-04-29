<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Les Racines d'à côté</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/portrait.css" />
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
				<h2>Claudette</h2>
				<p>Claudette est la fille de Louis Ponnard. Louis a été déporté durant la guerre suite à la dénonciation d’un de ses voisins car il était opposé au STO (Service du Travail Obligatoire). Il raconte son histoire à travers une lettre. Claudette et ses trois soeurs, ont grandi avec des racines meurtries. Elles en ont retiré une grande force de caractère et une forte détermination.</p>
				<p>Elles ont envie, voir même besoin, de transmettre l’histoire de leur père aux générations futures afin que cela de se reproduise pas.</p>
				<ul id="claudette" class="chapitres">
					<li id="enveloppe"><a href="#"><img src="img/claudette/enveloppe.png" alt="enveloppe" /></a></li>
				</ul>
				
				</div>
				<div id="container-video">
					<video id="video-arnaud" controls="controls"> 
						 <source src="video/video.mp4" type="video/mp4" /> 
						 <source src="video/video.webm" type="video/webm" /> 
						 <source src="video/video.oggtheora.ogv" type="video/ogg" />
						 <track src="video/st/st.vtt" default="default" kind="subtitles" srclang="fr" label="Français">
						 <object type="application/x-shockwave-flash" width="400" height="222" data="http://www.youtube.com/v/HVMoJqg41Bw"> 
						  <param name="movie" value="http://www.youtube.com/v/HVMoJqg41Bw" /> 
						  <param name="wmode" value="transparent" /> 
						  <!--[if lte IE 6 ]>
						  <embed src="http://www.youtube.com/v/HVMoJqg41Bw" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="222"></embed>
						  <![endif]--> 
						  <p>Vous n'avez pas de navigateur moderne, ni flash d'installé sur Internet Explorer... suivez les liens ci-dessous pour télécharger les vidéos.</p> 
						 </object> 
					</video> 
				</div>
			</div>
		
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.konami.js" type="text/javascript"></script>
 	<script src="http://popcornjs.org/code/dist/popcorn-complete.js"></script>
	<script src="js/jquery.roots.js" type="text/javascript"></script>
		<script>
		document.addEventListener( "DOMContentLoaded", function() {
			var popcorn = Popcorn( "#video-arnaud" );
			popcorn.code({
			 start: 1,
			 end: 3,
			 onStart: function( options ) {
				$("#banane").css("display", "none");
			 },
			 onEnd: function( options ) {
				$("#banane").css("display", "inline-block");
			 }
			})
		}, false );
	</script>      
		        
    </body>
</html>          
