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
	
	<section id="main-page" class="bg-mirjam">
		<div class="container">
			<div id="portrait">
				<div id="content">
				<h2>Mirjam</h2>
				<blockquote>"Mirjam que Jonathan a rencontré en Guinée, est incroyable. Avoir une vie aussi riche tout en étant partagée entre deux pays. C’est un rayon de soleil venu d’Afrique. Elle  a vite sympathisé avec <a href="anilda.php">Anilda</a> et se rendent ensemble à la zumba tous les mardis."</blockquote>				
				
				<ul id="mirjam" class="chapitres">
					<li data-start="15">Ça a quel goût une racine ?</li>
					<li data-start="123">Des racines café-au-lait</li>
					<li data-start="430">Le blues des racines</li>
					<li data-start="790">T’aurais pas un bout de racine ?</li>
				</ul>

				</div>
				<div id="container-video">
					<video id="video-arnaud" controls="controls"> 
						<source src="http://tm.comem.ch/racines/video/Interview_Mirjam_H264_720p.mp4" type="video/mp4" /> 
						<source src="http://tm.comem.ch/racines/video/Interview_Mirjam_WEBM_720p.webm" type="video/webm" /> 
						 <object type="application/x-shockwave-flash" width="400" height="222" data="http://youtu.be/XSFHhdtStYY"> 
						  <param name="movie" value="http://youtu.be/XSFHhdtStYY" /> 
						  <param name="wmode" value="transparent" /> 
						  <!--[if lte IE 6 ]>
						  <embed src="http://youtu.be/XSFHhdtStYY" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="222"></embed>
						  <![endif]--> 
						  <p>Vous n'avez pas de navigateur moderne, ni flash d'installé sur Internet Explorer... suivez les liens ci-dessous pour télécharger les vidéos.</p> 
						 </object> 
					</video> 
				</div>
			</div>
		<ul id="content-plus" class="mirjam">
			<li>
			
			<h2>Des objets pour mieux se souvenir</h2>
			<p>Pour se rappeler la Guinée, Mirjam garde avec elle quelques objets forts de symbole :</p>
			<ol>
				<li><h4>Monnaie guinéenne.</h4><img src="img/mirjam/billet.jpg">Dans son porte-monnaie, elle a toujours avec elle, de la monnaie guinéenne. Même là-bas, elle ne l’utilise pas. Elle la garde précieusement.</li>
				<li><h4>Une bouteille de sable.</h4><img src="img/mirjam/sable.png">Avant de quitter la Guinée à l’âge de 13 ans, elle a tenu à récolter elle-même un peu de sable de toutes les couleurs. Ce geste lui a permis d’emmener un peu de terre, un peu de ses racines avec elle vers la Suisse.</li>
				<li><h4>Une noix de Kola.</h4><img src="img/mirjam/kolaPetit.png">Mirjam a reçu lors de son mariage en Guinée, dix noix de kola. Habituellement, la mariée doit en consommer une après la célébration du mariage. Mirjam a préféré les sécher pour les conserver. </li>
			</ol>
			
			
			</li>
			<li>
				<h2>Une petite noix, un grand symbole</h2>
				<p>La noix de Kola est porteuse de valeurs symboliques en Afrique de l’ouest. En effet, elle est souvent consommée par mastication, soit seul lors de travaux difficiles ou voyage longs, soit en groupe pour passer un moment convivial. La noix de kola est donc souvent présente lors de cérémonies ou pour souhaiter la bienvenue aux invités. </p>
				<p>A cause de son goût amer, la noix de kola symbolise les épreuves de la vie et de ce fait l’amitié solide et la fidélité.</p>
				<img src="img/mirjam/kola.png" alt="" />
				<p>De couleur blanche, il est signe de paix et souhaite la bienvenue à celui qui la reçoit, alors que teinte de rouge, il  signe de déclaration de guerre.</p>
				<p>Toute demande en mariage est accompagnée d’une noix de kola blanche offerte par le prétendant à la mère de la jeune fille. Si en retour est envoyée une noix de kola blanche, la demande est acceptée, si elle est rouge c’est un refus. Lorsque le mariage a lieu, une abondante provision de noix de kola, offerte par le fiancé. Cette précieuse noix sert également à ramener la paix dans les ménages troublés. L’offre de quelques noix est considérée comme une grande politesse.</p>
				<p>En savoir plus : <a href="http://mieux-se-connaitre.com/?p=837">Mieux se connaitre</a></p>
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
