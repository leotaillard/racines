<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Les Racines d'à côté</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/main.css" />
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
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.konami.js" type="text/javascript"></script>
 	<script src="http://popcornjs.org/code/dist/popcorn-complete.js"></script>
 	<script>
		document.addEventListener( "DOMContentLoaded", function() {
			var popcorn = Popcorn( "#main-video" );
			popcorn.code({
			 start: 1,
			 end: 3,
			 onStart: function( options ) {
			 	//alert("début");
			 },
			 onEnd: function( options ) {
			 	//alert("fin");
			 }
			})
		}, false );
	</script>      
	<script src="js/jquery.roots.js" type="text/javascript"></script>	        
    </body>
</html>          
