<footer id="footer">
	<ul id="social">
		<li><a id="up-arrow" href="#"><img src="css/img/social/up-arrow.png" alt="Visiter les différents portraits de notre websérie"/></a></li>
		<li><a href="http://www.youtube.com/channel/UCEjef4xiuX5TBpmN8hf-q-g?feature=mhee" target="_blank"><img src="css/img/social/youtube.png" alt="Visiter notre chaîne Youtube"/></a></li>
		<li><a href="http://comemtransmedia2013.tumblr.com/" target="_blank"><img src="css/img/social/tumblr.png" alt="Visiter notre tumblr" /></a></li>
		<li><a href="https://www.facebook.com/LesRacinesDaCote" target="_blank"><img src="css/img/social/facebook.png" alt="Visiter notre facebook" /></a></li>
	</ul>
	
	<ul id="personnages">
		
		<?php
		 
			$nom = array("alice","arnaud","claudette","dorothee","mirjam","philipp","anilda");
			shuffle($nom);
		?>
		<?php for ($i = 0; $i < 7; $i++) { ?>
			
			<li><a href="<?php echo $nom[$i]; ?>.php"><img src="img/personnages/<?php echo $nom[$i]; ?>.jpg" alt="" /></a></li>
		<?php
			} 
		?>
	</ul>
	
</footer>

<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery.konami.js" type="text/javascript"></script>
<script src="http://popcornjs.org/code/dist/popcorn-complete.js" type="text/javascript"></script>
<script src="js/jquery.roots.js" type="text/javascript"></script>
<script src="js/jquery.turn.min.js" type="text/javascript"></script>
<script src="js/jquery.lightbox.js" type="text/javascript"></script>	

