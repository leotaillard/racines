$('document').ready(function(){
	
    // Dragging
    var dragging;
    // Tableau des personnes avec leurs informations 
    // (nom de l'image, nom prénom, description, url sur sa page)
    var perso = new Array();
	 perso[0] = new Array("aicha", "Aïcha Snoussi", "Aïcha est une jeune étudiante de 25 ans. Bien que née en Suisse, elle est originaire du Maroc.");
	 perso[1] = new Array("ben", "Ben Chang", "A 22 ans, Ben est en dernière année de formation dans le domaine de l'acupuncture chinoise traditionnelle.");
	 perso[2] = new Array("jonathan", "Jonathan Rochat", "Jonathan a 24 ans, il est originaire du Gros-de-Vaud et vient plus précisément d'Echallens.");
	 perso[3] = new Array("joao", "João Perreira", "João est originaire du Portugal, pays dont il est très fier. Il est actuellement coach sportif.");
	 perso[4] = new Array("mirjam", "Mirjam", "Mirjam est un petit bout de femme fragile et d'une force incroyable.");
	 perso[5] = new Array("arnaud", "Arnaud", "Fier d'être camerounais, Arnaud, 30 ans, nous parle de ses racines africaines.");
	 perso[6] = new Array("dorothee", "Dorothée", "Dorothée est originaire de Vendée en France. Aujourd'hui elle habite à Yverdon.");
	 perso[7] = new Array("philipp", "Philipp", "Philipp est charpentier et originaire d'Argovie. Il appartient à la «Rolandsschacht».");
	 perso[8] = new Array("claudette", "Claudette", "Claudette est la fille de Louis Ponnard. Louis a été déporté durant la guerre.");
	 perso[9] = new Array("anilda", "Anilda", "Véritable pile électrique, adepte du marathon, Anilda nous vient du Brésil.");
	 perso[10] = new Array("alice", "Alice", "D'origine hollandaise, Alice vit en Suisse depuis soixante ans et s'y sent merveilleusement bien");
    
    // Melanger le tableau
    perso = shuffle(perso);
    
    // Afficher les personnes avec leurs informations
    for(var i=0; i < perso.length; i++){
        // Récuperer les différentes informations
        var fenetre = "fenetre"+i;
        var imgUrl = "images/"+perso[i][0]+".jpg";
        var h2Infos = "<h2>"+perso[i][1]+"</h2>";
        var pInfos = "<p>"+perso[i][2]+"</p>";
        var lienInfos = "<p class='pLien'>Consulter le profil >></p>";
		var lienUrl = perso[i][0]+".php"; 
        // Insérer les informations dans le document
		$('#'+fenetre).children('.lienProfile').attr('href', lienUrl);
        $('#'+fenetre).css('background-image', 'url('+imgUrl+')');
        $('#'+fenetre).children('.lienProfile').children(".infos").append(h2Infos);
        $('#'+fenetre).children('.lienProfile').children(".infos").append(pInfos);
        $('#'+fenetre).children('.lienProfile').children(".infos").append(lienInfos);
    }
    
    setTimeout(function() {
        $('html, body').animate({  
            scrollTop:$('.maison').offset().top  
        }, 800);  
    }, 500);
    
// Controler si c'est un drag sur le boddy
    $("body").on("touchmove", function(){
      dragging = true;
    });

    // Action pour ouvrir une fenetre
    $('.vitre').on('touchend mouseup', function (){        
        // Ouvrir la fenetre au touch
        if (!dragging){
            // Fermer les fenêtres ouvertes et les informations
            if($('.vitre').not(this).is(':hidden')){
                // Trouver la fenêtre ouverte et la fermer
                $(".vitre").each(function() {
                    if($(this).is(':hidden')){
                        var vitre = $(this).attr('id');
                        $('#'+vitre).parent('.fenetre').children('.lienProfile').children('.infos').fadeOut('slow', function() {});
                        $('#'+vitre).slideToggle('slow', function() {});
                    }
                });
            }
            // Ouvrir la fenêtre cliquée
            $(this).slideToggle('slow', function() {
                // Afficher les informations
                $(this).parent('.fenetre').children('.lienProfile').children('.infos').fadeIn('slow', function() {});
            });
        }else{
            dragging = false;
        }
    });

    //Action pour fermer le contenu supplémentaire
    $('.fermer').on('touchend mouseup', function(){
        $(".contenuSup").fadeOut("slow");
        dragging = true;
    });

    //Action pour ouvrir le contenu supplémentaire quand on touch
    $('#porte').on('touchend mouseup', function(){
        // Ouvrir le contenu supplémentaire
        if (!dragging){
            $('.contenuSup').fadeIn("slow");
        }else{
            dragging = false;
        }
    });  
});


//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
// fonction pour mélanger un tableau
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};