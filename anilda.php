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
				<h2>Anilda</h2>
				<blockquote>" Anilda, Brésilienne et marathonienne au grand cœur, récolte des dons afin d’aider diverses associations caritatives. C’est d’ailleurs lors de l’un de ses footings matinaux qu’elle a rencontré <a href="dorothee.php">Dorothée</a>. Elles sont vite devenues amies et aiment partager leurs souvenirs de leurs pays d’origine. "</blockquote>
					<ul id="anilda" class="chapitres">
						<li data-start="22">La distance et les racines</li>
						<li data-start="209">Une graine et des racines</li>
						<li data-start="240">Le choc des racines</li>
                        <li data-start="558">Les médailles et les racines</li>
					</ul>
				</div>
				<div id="container-video">
					<video id="video-arnaud" controls="controls"> 
						 <source src="http://tm.comem.ch/racines/video/Interview_Anilda_H264_720p.mp4" type="video/mp4" /> 
						 <source src="http://tm.comem.ch/racines/video/Interview_Anilda_WEBM_720p.webm" type="video/webm" /> 
						 <object type="application/x-shockwave-flash" width="400" height="222" data="http://youtu.be/faTu5eyQtRQ"> 
						  <param name="movie" value="http://youtu.be/faTu5eyQtRQ" /> 
						  <param name="wmode" value="transparent" /> 
						  <!--[if lte IE 6 ]>
						  <embed src="http://youtu.be/faTu5eyQtRQ" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="222"></embed>
						  <![endif]--> 
						  <p>Vous n'avez pas de navigateur moderne, ni flash d'installé sur Internet Explorer... suivez les liens ci-dessous pour télécharger les vidéos.</p> 
						 </object> 
					</video> 
				</div>
			</div>

			<ul id="content-plus" class="anilda">
				<li>
				<h2>Brésil, terre de partage</h2>
				<p>Dans la culture brésilienne, il n'est pas rare d'aider ses proches. Anilda a su amener sa chaleur humaine en terre suisse. Soucieuse de s’intégrer et de partager avec les autres, elle n’hésite jamais à s’investir dans la vie associative et sportive de la région. Dès lors Anilda a déjà parcouru 53 marathons et toujours avec une mission : apporter de l’aide à d’autres en récoltant des dons afin d’aider diverses associations telles que Sport handicap, procap ou Nova Friburgo. </p>
				<p>Anilda a récolté 5’500 francs  pour aider l’association helvetico-brésilenne dont le but et d’aider au développement du royaume du Brésil, notamment suite à la catastrophe naturelle.<p>
				 
				<h3>Liens</h3>
				<p><a href="http://www.plusport.ch/fr.html" target="_blank">Sport handicap</a></p>
				<p><a href="http://www.novafribourg.ch" target="_blank">Nova Friburgo</a></p>
				<p><a href="http://www.procap.ch/Home.20.0.html?&amp;L=3" target="_blank">Procap</a></p>
				
				
				</li>
				
				<li>
					<h2>Carta a los amigos</h2>
					<div id="magazine">
						<div><img src="img/anilda/001.png" alt=""></div>
						<div><img src="img/anilda/002.png" alt=""></div>
					</div>
					
				</li>
				<div class="clear"></div>
			</ul>


		
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
		<script>

		$(window).ready(function() {

			$('#magazine').turn({
								display: 'single',
								acceleration: true,
								gradients: !$.isTouch,
								elevation:50,
								height: 720,
								when: {
									turned: function(e, page) {
										/*console.log('Current view: ', $(this).turn('view'));*/
									}
								}
							});
		});

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
