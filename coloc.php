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
				<div id="content-coloc">
					<h2>Bonjour ! Moi, c’est Jean-Claude. Laissez-moi vous raconter mon histoire… </h2>
					<p>Vous savez, dans la vie, il y a parfois des circonstances qui nous amènent à vivre des choses dont les conséquences peuvent être extraordinaires.</p>
					<p>À l’époque, je cherchais un lieu où loger. Il y avait urgence, et j’ai finalement débarqué dans une collocation. L’accueil a été un peu rude mais j’ai décidé d’y rester parce que je n’avais pas le choix. Dans la colloc’ ils étaient quatre : <a href="https://www.facebook.com/pages/Aïcha-Snoussi/302907033171033" target="_blank" >Aïcha</a> la maîtresse de maison, <a href="https://www.facebook.com/pages/Jonathan-Rochat/503650359682893" target="_blank" >Jonathan</a> le paysan, <a href="https://www.facebook.com/pages/Ben-Chang/505839452796254" target="_blank" >Ben</a> le geek et <a href="https://www.facebook.com/pages/Jo%C3%A3o-Perreira/259137790888618" target="_blank" >Joao</a> le précieux, tous de culture et de racines différentes. Ils ont créé un profil Facebook qui s’intitule <a href="https://www.facebook.com/LesRacinesDaCote" target="_blank" >les racines d’à côté</a>. Je vous conseille d’aller voir de plus près et de les découvrir comme je l’ai fait moi-même en partageant leur quotidien. Ne vous arrêtez pas sur vos préjugés ; ils sont très sympa.</p>
					<p>J’ai aussi très vite été amené à faire la connaissance des voisins et de leurs histoires. Je me souviens d’<a href="alice.php">Alice</a> la grand-maman hollandaise, de <a href="mirjam.php">Mirjam</a> aux racines guinéennes, de <a href="philipp.php">Philipp</a> Compagnon de Voyage argovien, de <a href="dorothee.php">Dorothée</a> hôtesse de l’air française… Il y en a eu d’autres que vous pouvez découvrir sur mon <a href="http://jean-clod.blogspot.ch/" target="_blank" >blog</a>. Tous ces gens ont partagé leurs racines avec moi, chacun à sa façon, et cela m’a permis d’évoluer, de grandir et de changer de vie. Moi, qui au départ étais plutôt coincé, le genre rempli de préjugés, je me suis mis à voyager, à découvrir le monde, les cultures et les gens.</p>
					<p>Aujourd’hui, grâce à Philipp, j'ai pu planter mes racines avec ma loutre ☺ et croyez-moi si je vous dis que ça pousse !</p>
					<p>Ah ! J’allais oublier. Je mets à votre disposition un <a href="map.php">outil génial</a> pour dessiner vos racines. Allez-y et faites-vous plaisir !
					Je vous embrasse.</p>
				</div>
				<div id="media-coloc">
					<a href="http://jean-clod.blogspot.ch/" target="_blank" ><img src="img/coloc/annonce.jpg" alt="" /></a>
					<a href="http://jean-clod.blogspot.ch/" target="_blank" ><img src="img/coloc/apparte.jpg" alt="" /></a>
					<a href="http://jean-clod.blogspot.ch/" target="_blank" ><img src="img/coloc/chambre-orange.jpg" alt="" /></a>
					
				</div>
			</div>
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
	<script type="text/javascript">
	
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
		
		
		$(window).bind('keydown', function(e){
			
			if (e.keyCode==37)
				$('#magazine').turn('previous');
			else if (e.keyCode==39)
				$('#magazine').turn('next');
				
		});
	
	</script>
		        
    </body>
</html>          
