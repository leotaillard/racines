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
					<h2>Claudette</h2>
					<blockquote>" Claudette, d’origine française, m’a beaucoup appris sur l’importance de transmettre ses propres racines à ses enfants et que par ce biais, on peut leur apporter beaucoup de force de caractère. Elle s’entendait très bien avec <a href="arnaud.php">Arnaud</a>, son voisin Camerounais. "</blockquote>
					<ul id="claudette" class="chapitres">
						<li data-start="341">La force des racines</li>
						<li data-start="435">Les racines du futur</li>
					</ul>
				</div>
				<div id="container-audio">
					<audio id="audio-claudette" controls="controls">
					   <source src="http://tm.comem.ch/racines/audio/claudette.mp3" type="audio/mp3" />
					   <source src="http://tm.comem.ch/racines/audio/claudette.wav" type="audio/wav" />
					   Votre navigateur ne supporte pas le tag "<audio>".
					</audio> 
					
				</div>
				
			</div>
			<ul id="content-plus" class="claudette">
				<li>
					<h2>Le Service du Travail Obligatoire</h2>
				<p>Durant la Seconde Guerre mondiale, L’Allemagne nazie imposa au gouvernement français de Vichy la mise en place d’un service du travail obligatoire (STO). Ce système était basé sur la réquisition et le transfert de force de centaines de milliers de français pour contribuer à l’effort de guerre allemand.</p>
				<img src="img/claudette/image.jpg" alt="" />
				<p>En effet, sous l’occupation nazie, le général Pétain dirigea la collaboration qui prit plusieurs formes : coopération économique, arrestations des résistants, des opposants de gauche, ainsi que les tristement célèbres rafles des juifs établis ou cachés. </p>
				<p>L’histoire a trop peu parlé de ce que les français ont subi, notamment au travers des STO. Des familles ont été violemment séparées et ont parfois jamais revu maris, pères et frères. Après la guerre, les blessures ne se sont pas toujours forcément cicatrisées.  La psychose de la chasse aux colabos et les non-dits face à la souffrance vécue ont fortement marqué les familles françaises.</p>
				<p>Chaque famille a transmis à sa manière les souffrances subies. Certains l’on tue. D’autres ont véhiculée sous forme d’aversion allemande, alors que d’autre ont préféré transmettre à leur descendant leur force de caractère d’une telle expérience.</p>
				<p>« Témoignage court de mon voisin par rapport à sa famille allemande »</p>
				
				<p>En savoir plus :<a href="http://fr.wikipedia.org/wiki/Service_du_travail_obligatoire_%28France%29" target="_blank">Article wikipédia</a></p>
				</li>
				<li>
					<h2>Booklet Claudette</h2>
					<div id="magazine">
						<div><img src="img/claudette/book/001.png" alt=""></div>
						<div><img src="img/claudette/book/002.png" alt=""></div>
						<div><img src="img/claudette/book/003.png" alt=""></div>
						<div><img src="img/claudette/book/004.png" alt=""></div>
						<div><img src="img/claudette/book/005.png" alt=""></div>
						<div><img src="img/claudette/book/006.png" alt=""></div>
						<div><img src="img/claudette/book/007.png" alt=""></div>
						<div><img src="img/claudette/book/008.png" alt=""></div>
						<div><img src="img/claudette/book/009.png" alt=""></div>
					</div>
					
				</li>
				<li>
					<h2>La mémoire est un devoir</h2>
					<p>La Fédération Nationale des Déportés et Internés de la Résistance (F.N.D.I.R.) et l'Union Nationale des Associations de Déportés, Internés et Familles de Disparus (U.N.A.D.I.F.) sont des mouvements nés de la même source d’inspiration : la Résistance.</p>
					<p>Ces associations participent aux cérémonies officielles et enseignent, via des conférences, l’histoire de la résistance et de la déportation. Elles veulent maintenir le souvenir des morts et des déportés. De plus, ces mouvements publient plusieurs fois par année la revue « Le Déporté pour la Liberté » dans laquelle on retrouve des informations sur ces mouvements et les personnes qui les animent, des événements et des témoignages.
Pendant des décennies, les associations de prisonniers de camp de concentration et l'association d'anciens travailleurs forcés ont lutté pour la reconnaissance sociale. C’est seulement en octobre 2008 que le gouvernement français a reconnu les victimes du travail forcé. Une gratification tardive et qui a été, pour beaucoup d’entre eux, posthume.</p>
					<p>« Les Français Libres sont condamnés à mort par Vichy, mais le jour viendra où leurs noms seront glorifiés et gravés sur la pierre, dans les rues et les villages d'une France qui aura retrouvé sa liberté et sa gloire d'antan au sein d'une Europe libérée »</p>
					<blockquote>Winston Churchill, août 1940</blockquote>

					<p>En savoir plus : <a href="http://www.unadif.fr" target="_blank">U.N.A.D.I.F.</a></p>

				</li>
				<div class="clear"></div>
			</ul>
		
		</div>
	</section>	<!--  fin div main-page -->
	
	<?php include("includes/footer.php"); ?>
	<!-- ici fini la structure et commence l'appel au js -->
	<script type="text/javascript">
		$("#container-audio").toggle(function() {
			var popcorn = Popcorn('#audio-claudette');
			popcorn.play();
		},
		function() {
			var popcorn = Popcorn('#audio-claudette');
			popcorn.pause();
			
		});
		$("#claudette.chapitres li").click(function() {
			var popcorn = Popcorn('#audio-claudette');
				var time = $(this).attr('data-start');
		//		var index = $(".chapitres li").index(this);
				popcorn.currentTime(time).play();
			});
		
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
