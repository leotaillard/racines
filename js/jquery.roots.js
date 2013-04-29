/*
Auteur: Léo Taillard
*/

$(document).ready(function() {

	setHeight();
	$( window ).konami({  
	      cheat: function() {
	          alert( 'Yeah!' );
	      }
	  });
	  
	  
	  $("#up-arrow").click(function() {
		  		$("#personnages").slideToggle("slow",function() {
		  		$("#up-arrow img").toggleClass('rotate');
		  	});
	  });
	  
});

function setHeight(){
	var heightWindow = $(window).height();
	var heightMenu = $("#main-nav").height();
	var heightFooter = $("#footer").height();
	
	var diff = heightWindow - heightMenu - heightMenu;
	
	$("#main-page").css('height', diff);
	$("#house").css('height', diff);
	$("#content").css('height', diff);
	
}
