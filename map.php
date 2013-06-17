<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Racines - La Map</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/map.css" />
	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5/leaflet.css" />
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/MarkerCluster.css" />
	<link rel="stylesheet" href="css/MarkerCluster.Default.css" />
	
        
        
    <script src="js/config.js" type="text/javascript"></script>
	<script src="js/jquery.min.js" type="text/javascript"></script>	        
    
    <link rel="shortcut icon" href="ico/favicon.png">
<!--    <link rel="apple-touch-icon" href="ico/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="ico/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="ico/apple-touch-icon-114x114.png"> -->
    
	<!--[if lt IE 9]>
	  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
    </head>
    <body>
    <?php include("includes/main-nav.php"); ?>
		<div id="map">
		</div>		
        <div id="form">
        	<div id="infoMap">
        	<p class="titreInfo">Où sont vos racines ?</p>
        	<p>Entrer votre nom/prénom, une description et votre type de points</p>
        	<p>Double cliquer sur la map pour ajouter votre point</p>
        	<p> Utilisez la touche majuscule pour zoomer.</p>
        	</div>
        	<div class="legendBox">
        	<div class="color-box" style="background-color: #000000;"></div><div class="pointInfoAjout">Points ajoutés par les internautes</div>
        	<div class="color-box" style="background-color: #71c056;"></div><div class="pointInfoAjout">Points pour les interviewés</div>
        	<div class="color-box" style="background-color: #35579a;"></div><div class="pointInfoAjout">Points pour les colocataires</div>
           </div>
           <fieldset>
         	<legend>1. Informations sur votre point</legend>
            <label for="inputName">Nom prénom</label><input id="inputName" type="text" name="name" /><p>
            <label for="inputDescription">Description</label><textarea id="inputDescription" name="description"></textarea></p>
         </fieldset> 
         <fieldset>
         	<legend>2. Votre type de point</legend>
         	<p>
             	<input type="radio" id="maison" name="typePoint" value="maison" />
             	<label for="maison">Chez moi</label>
            </p>
            <p>
                <input type="radio" id="naissance" name="typePoint" value="naissance" />
             	<label for="naissance">J'y suis né</label>
            </p>
            <p>
                <input type="radio" id="like" name="typePoint" value="like" />
             	<label for="like">Endroit que j'aime</label>
            </p>
            <p id="msg">
            </p>
         </fieldset>
	</div>
	<?php include("includes/footer.php"); ?>
	<script src='js/mustache.js'></script>
	<script src='js/jquery.kinetic.min.js'></script>
	<script src="http://cdn.leafletjs.com/leaflet-0.5/leaflet.js"></script>
	    <!--[if lte IE 8]><link rel="stylesheet" href="css/MarkerCluster.Default.ie.css" /><![endif]-->
	<script src="js/leaflet.markercluster-src.js"></script>
	    
	<script src="js/map.js" type="text/javascript"></script>
	<div id="markerTemplate" class="hidden">
	    <div class="popupMap">
	        <div class="media">{{{mediaUrl}}}</div>
	        <div class="info">
	            <div class="titrePopup">
	                {{title}}
	            </div>
	            <div class="descriptionPopup">
		            {{description}}
	            </div>  
	        </div>
	    </div>
	</div>
	
    </body>
</html>          
