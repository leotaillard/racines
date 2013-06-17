<!DOCTYPE html>
<html lang="fr">
    <head>
	<title>Racines - La Map</title>        
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="../css/main.css"/>
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
		<div id="mapMobile">
		</div>		
    <script src='js/mustache.js'></script>
	<script src="http://cdn.leafletjs.com/leaflet-0.5/leaflet.js"></script>
        <!--[if lte IE 8]><link rel="stylesheet" href="css/MarkerCluster.Default.ie.css" /><![endif]-->
	<script src="js/leaflet.markercluster-src.js"></script>
        
    <script src="js/mapMobile.js" type="text/javascript"></script>
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
	<div class="retour">
			<a href="index.html">Retour à l'immeuble</a>
		</div>
		    <script>
			$(document).ready(function() {
				$('a').bind('click', function() {
					window.location = $(this).attr('href');
					return false;
				});
			});
			
		</script>
		
    </body>
</html>          
