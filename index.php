<?php
$useragent=$_SERVER['HTTP_USER_AGENT'];
if(preg_match('/ (android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))
header('Location: http://poulpe.heig-vd.ch/ogo13/racines/www/mobile/');
?>
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
		<div class="container">
			<div id="house">
				<div id="roof">
					<a href="index.php"><img src="css/img/logo.png" alt="Logo | les racines d'à côté" /></a>
				</div>
				<div id="floor">
				
					<div class="window" id="flat-1">
						<a href="arnaud.php">
							<div class="absolute sprite-arnaud"></div>
							<div class="popup right arnaud-pop"></div>
						</a>
					</div>
					<div class="window" id="flat-2">
						<a href="alice.php">
							<div class="absolute sprite-alice"></div>
							<div class="popup alice-pop"></div>
						</a>
					</div>
					<div class="window" id="flat-3">
						<a href="mirjam.php">
							<div class="absolute sprite-mirjam"></div>
							<div class="popup mirjam-pop"></div>
							
						</a>
					</div>
					<div class="window" id="flat-4">
						<a href="philipp.php">
							<div class="absolute sprite-philipp"></div>
							<div class="popup philipp-pop"></div>
						</a>
					</div>
					<div class="window" id="flat-5">
						<a href="coloc.php">
							<div class="absolute sprite-coloc"></div>
<!--							<div class="popup coloc-pop"></div>-->
						</a>
					</div>
					<div class="window" id="flat-6">
						<a href="anilda.php">
							<div class="absolute sprite-anilda"></div>
							<div class="popup anilda-pop"></div>
						</a>
					</div>
					<div class="window" id="flat-7">
						<a href="claudette.php">
							<div class="absolute sprite-claudette"></div>
							<div class="popup claudette-pop"></div>
						</a>
					</div>
					<div class="window" id="flat-8">
							<div class="absolute sprite-black"></div>
					</div>
					<div class="window" id="flat-9">
						<a href="dorothee.php">
							<div class="absolute sprite-dorothee"></div>
							<div class="popup dorothee-pop"></div>
						</a>
					</div>
					
				</div>
			</div>
		
			<div id="content">
				<video id="main-video" controls="controls" allowfullscreen="true" autoplay> 
					<source src="http://tm.comem.ch/racines/video/ProjetTransmedia_Racines_720p.mp4" type="video/mp4" /> 
					<source src="http://tm.comem.ch/racines/video/ProjetTransmedia_Racines_720p.webm" type="video/webm" /> 
<!--					<source src="video/video.oggtheora.ogv" type="video/ogg" /> -->
					<object type="application/x-shockwave-flash" width="400" height="222" data="http://youtu.be/b_iOBG468Sg"> 
					<param name="movie" value="http://youtu.be/b_iOBG468Sg" /> 
					<param name="wmode" value="transparent" /> 
					<!--[if lte IE 6 ]>
					<embed src="http://youtu.be/b_iOBG468Sg" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="222"></embed>
					<![endif]--> 
					<p>Vous n'avez pas de navigateur moderne, ni flash d'installé sur Internet Explorer... suivez les liens ci-dessous pour télécharger les vidéos.</p> 
					</object> 
				</video> 
				
				<h2>Les voisins d'à côté</h2>
				<p>
				Les racines, ça pousse, ça vit, ça meurt, ça vibre, ça s'emmêle, bref ça se partage et donne de belles histoires...
				</p>
			</div>
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.konami.js" type="text/javascript"></script>
 	<script src="http://popcornjs.org/code/dist/popcorn-complete.js"></script>
 	<script>
		document.addEventListener( "DOMContentLoaded", function() {
			var popcorn = Popcorn( "#main-video" );
			//philipp
			popcorn.code({
			 start: 8,
			 end: 19,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-4 a").addClass("hover-flat-4");
			 	$('#flat-4 a .popup').addClass("popup-active");
			 },
			 onEnd: function( options ) {
			 	$("#flat-4 a").removeClass("hover-flat-4");
			 	$('#flat-4 a .popup').removeClass("popup-active");
			 }
			}),
			//alice
			popcorn.code({
			 start: 93,
			 end: 118,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-2 a").addClass("hover-flat-2");
			 	$('#flat-2 a .popup').addClass("popup-active");
			 },
			 onEnd: function( options ) {
			 	$("#flat-2 a").removeClass("hover-flat-2");
			 	$('#flat-2 a .popup').removeClass("popup-active");
			 }
			}),
			//mirjam
			popcorn.code({
			 start: 138,
			 end: 150,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-3 a").addClass("hover-flat-3");
			 	$('#flat-3 a .popup').addClass("popup-active");
			 },
			 onEnd: function( options ) {
			 	$("#flat-3 a").removeClass("hover-flat-3");
			 	$('#flat-3 a .popup').removeClass("popup-active");
			 }
			}),
			//claudette
			popcorn.code({
			 start: 168,
			 end: 178,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-7 a").addClass("hover-flat-7");
			 	$('#flat-7 a .popup').addClass("popup-active");
			 },
			 onEnd: function( options ) {
			 	$("#flat-7 a").removeClass("hover-flat-7");
			 	$('#flat-7 a .popup').removeClass("popup-active");
			 }
			}),
			//dorothee
			popcorn.code({
			 start: 187,
			 end: 198,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-9 a").addClass("hover-flat-9");
			 },
			 onEnd: function( options ) {
			 	$("#flat-9 a").removeClass("hover-flat-9");
			 }
			}),
			//philipp
			popcorn.code({
			 start: 210,
			 end: 218,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-4 a").addClass("hover-flat-4");
			 },
			 onEnd: function( options ) {
			 	$("#flat-4 a").removeClass("hover-flat-4");
			 }
			}),
			//coloc 1
			popcorn.code({
			 start: 27,
			 end: 30,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-5 a").addClass("hover-flat-5");
			 },
			 onEnd: function( options ) {
			 	$("#flat-5 a").removeClass("hover-flat-5");
			 }
			}),
			//coloc 2
			popcorn.code({
			 start: 46,
			 end: 50,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-5 a").addClass("hover-flat-5");
			 },
			 onEnd: function( options ) {
			 	$("#flat-5 a").removeClass("hover-flat-5");
			 }
			}),
			//coloc 3
			popcorn.code({
			 start: 78,
			 end: 81,
			 onStart: function( options ) {
			 	//alert("début");
			 	$("#flat-5 a").addClass("hover-flat-5");
			 },
			 onEnd: function( options ) {
			 	$("#flat-5 a").removeClass("hover-flat-5");
			 }
			})
			
			
		}, false );
	</script>      
	<script src="js/jquery.roots.js" type="text/javascript"></script>	        
    </body>
</html>          
