<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Les Racines d'à côté</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/feed.css" />
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
	
		<!-- container du feed -->
		<section id="main-page">
			<div class="container">
				<!-- post -->
				<div class="post">
					<div class="user">
						<img src="img/avatar/snoussi.png" alt="Photo Aïcha Snoussi" width="100" height="100">
						<p>Aïcha Snoussi</p>
					</div>
					<div class="postContent borderFacebook">
						<div class="arrow aFacebook"></div>
						<div class="socialLogo logoFacebook"></div>
						<span>Jonathan Rochat Faudra que tu me donnes des adresses sympa pour mon future voyage en Guinée! J'ai réussi à trouver un super plan grâce à Dorothée (notre voisine hôtesse de l'air)</span>
							<img src="img/postFacebook.jpg" alt="postFacebook" width="600" height="399">
						</div>
				</div>
				
				<!-- post -->
				<div class="post">
					<div class="user">
						<img src="img/avatar/snoussi.png" alt="Photo Aïcha Snoussi" width="100" height="100">
						<p>Aïcha Snoussi</p>
					</div>
					<div class="postContent borderInsta">
						<div class="arrow aInsta"></div>
						<div class="socialLogo logoInsta"></div>
					</div>
				</div>			
				<!-- post -->
				<div class="post">
					<div class="user">
						<img src="img/avatar/snoussi.png" alt="Photo Aïcha Snoussi" width="100" height="100">
						<p>Aïcha Snoussi</p>
					</div>
					<div class="postContent borderTumblr">
						<div class="arrow aTumblr"></div>
						<div class="socialLogo logoTumblr"></div>
						<div id="photoset_45676447055" class="html_photoset">    <iframe id="photoset_iframe_45676447055" class="photoset" style="border:0px; background-color:transparent; overflow:hidden;" src="http://jonathanvoyage.tumblr.com/post/45676447055/photoset_iframe/jonathanvoyage/tumblr_mjv4vg6xNo1s8jeo8/500/false" frameborder="0" height="988" scrolling="no" width="500"></iframe></div>
										<p>Bonne poudre, bonnes sensations!</p>
						</div>
				</div>
			
			</div>
		</section>
		<?php include("includes/footer.php"); ?>
		<!-- ici fini la structure et commence l'appel au js -->
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script src="js/jquery.konami.js" type="text/javascript"></script>
		<script src="http://popcornjs.org/code/dist/popcorn-complete.js"></script>
		<script src="js/jquery.roots.js" type="text/javascript"></script>	        
    </body>
</html>          
