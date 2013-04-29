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
				<h2>Arnaud Kana</h2>
				<p>Fier d’être camerounais, Arnaud, 30 ans, nous parle de ses racines africaines sans lesquelles la vie ne serait pas ce qu’elle est.</p>
				<p>
				Ses ancêtres, sa famille, sa spiritualité et toutes les choses qu’il voudrait transmettre, il nous les livre avec générosité et sincérité.</p>
					<ul id="arnaud" class="chapitres">
						<li id="banane"><a href="#"><img src="img/arnaud/banane.png" alt="banane" /></a></li>
						<li id="maillot"><a href="#"><img src="img/arnaud/maillotFoot.png" alt="" /></a></li>
						<li id="culte"><a href="#"><img src="img/arnaud/culte.png" alt="" /></a></li>
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
