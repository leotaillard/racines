<footer id="footer">
	<ul id="social">
		<li><a id="up-arrow" href="#"><img src="css/img/social/up-arrow.png" alt="Visiter les différents portraits de notre websérie"/></a></li>
		<li><a href="http://www.youtube.com/channel/UCEjef4xiuX5TBpmN8hf-q-g?feature=mhee" target="_blank"><img src="css/img/social/youtube.png" alt="Visiter notre chaîne Youtube"/></a></li>
		<li><a href="http://comemtransmedia2013.tumblr.com/" target="_blank"><img src="css/img/social/tumblr.png" alt="Visiter notre tumblr" /></a></li>
		<li><a href="https://www.facebook.com/LesRacinesDaCote" target="_blank"><img src="css/img/social/facebook.png" alt="Visiter notre facebook" /></a></li>
	</ul>
	
	<ul id="personnages">
		
		<?php 
			$array = array(1,2,3,4,5,6,7);
			shuffle($array);
		?>
		
		<?php for ($i = 0; $i < 7; $i++) { ?>
			<li><a href="portrait.php"><img src="img/personnages/perso-<?php echo $array[$i]; ?>.png" alt="" /></a></li>
		<?php } ?>
	</ul>
</footer>	
