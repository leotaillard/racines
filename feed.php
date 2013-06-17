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
		<div id="feed">
				<!-- container du feed -->
			<div id="feedContainer">
			</div>
			<div id="feedNav">
				<button id="bPrevious">Plus récent</button>
				<button id="bNext">Plus ancien</button>
			</div>
		</div>
				
			
	<?php include("includes/footer.php"); ?>
	<script src="js/feed.js" type="text/javascript"></script>	        
    </body>
</html>          
