<?php $page= substr($_SERVER["PHP_SELF"],strrpos($_SERVER["PHP_SELF"], '/')+1,strrpos($_SERVER["PHP_SELF"],'.')-1); ?>


<nav id="main-nav">
	<div class="container">
		<?php if ($page != 'index.php') { ?>
			
			<div id="litte-logo"><a href="index.php"><img src="css/img/logo-little.png" alt="" /></a></div>
			
		<?php } ?>
		<ul id="nav">
			

<!--		<li><a class='active' href='index.php'>Stories</a></li>
			<li><a href="feed.php">Feeds</a></li>
			<li><a href="#">Map</a></li>
			<li><a href="#">Contact</a></li>-->
			
			 <li><a  <?php if ($page == 'index.php' || $page == 'portrait.php') { ?>class="active" <?php } ?>href="index.php" title="Stories">Stories</a>
			 
			 
			 <ul class="sous-menu">
			 	<li><a href="alice.php">Alice</a></li>
			 	<li><a href="anilda.php">Anilda</a></li>
			 	<li><a href="arnaud.php">Arnaud</a></li>
			 	<li><a href="claudette.php">Claudette</a></li>
			 	<li><a href="dorothee.php">Dorothée</a></li>
			 	<li><a href="mirjam.php">Mirjam</a></li>
			 	<li><a href="philipp.php">Philipp</a></li>
			 </ul>
			 </li>
			 
			<li><a <?php if ($page == 'feed.php') { ?>class="active"<?php } ?> href="feed.php" title="Découvre nos réseaux sociaux">Feeds</a></li>
			 
			<li><a <?php if ($page == 'map.php') { ?>class="active"<?php } ?> href="map.php" title="Notre map intéractive">Map</a></li>
			 
			<li><a <?php if ($page == 'contact.php') { ?>class="active"<?php } ?> href="contact.php" title="Notre page de contact">Contact</a></li>
			 
		</ul>
	</div>
</nav>
