map = null;
var baseLayer = null;
var arrayType = ['naissance', 'maison', 'like', 'likeColoc', 'maisonColoc', 'naissanceColoc',
'likeInterview', 'maisonInterview', 'naissanceInterview'];
var markers = new L.MarkerClusterGroup();

var msg_success = "votre point a bien été ajouté, merci";
var msg_error = "veuillez remplir tous les champs";
$(window).resize(function () {
    setHeight();
});
$(document).ready(function() {
    $("#msg").hide();
    setHeight();
    
    map = L.map('map', {
        center: new L.LatLng(46.79, 6.65),
        zoom: 12,
    });
    

    baseLayer = L.tileLayer('http://{s}.tile.cloudmade.com/b9941117432e4e63bb0e5a410de8e6eb/93138/256/{z}/{x}/{y}.png', {
        // Ajoute un copyright custom
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    
    // ensuite on creer la map (asynchrone)
    $.when(
        getPoints()
    ).then(addControl)
    
    map.doubleClickZoom.disable();
    map.on('dblclick', onMapClick);
    
    
    $("#maison, #naissance, #like").change(function(){
        $("#msg").slideUp(200);
    });
    
    $("#inputDescription, #inputName").click(function(){
        $("#msg").slideUp(200);
    });
});


function isError(boolean){
    $("#msg").empty();
    if(boolean){
        // en cas d'erreur
        $("#msg").removeClass("success").addClass("error");
        $("#msg").append(msg_error);
        $("#msg").slideDown(200);
    }
    else{
        $("#msg").removeClass("error").addClass("success");
        $("#msg").append(msg_success);
        $("#msg").slideDown(200);
    }
}



function getPoints(){
    // pour chaque type de point
    $(arrayType).each(function(index, type) {
        // prend les points qui  correspond au type, ensuite on créer les layers
            $.getJSON(APP_URL+DISPATCHER, {controller: 'point', action: 'getPointFromType', type: type}, function(data){
                $(data.features).each(function(index, feat) {
                    var output = "<div class='popupMap'><div class='text'><h2>" + feat.properties.titre + "</h2><p>" + feat.properties.comm + "</p></div></div>";
                    var options = {
                        'minWidth': 500
                    };
                    var typePoint = feat.properties.type;
                    var icon = getIcon(typePoint);
                    var actualLat = feat.geometry.coordinates[1];
                    var actualLong = feat.geometry.coordinates[0];

                    var point = L.marker([actualLat, actualLong], {icon: icon}).bindPopup(output, options).addTo(markers);
                });
           })
    });
}

function addControl(){
    map.addLayer(markers);
}

    

function getIcon(typePoint){
    var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [65, 65],
            popupAnchor: [0, -25]
        }
    });
    var icon = new LeafIcon({iconUrl: 'img/'+typePoint+'.png'});
    return icon;
}

function onMapClick(e) {
    var actualLat = e.latlng.lat;
    var actualLong = e.latlng.lng;
    
    
    var nom = $("#inputName").val();
    var desc = $("#inputDescription").val();
    var typePoint = $('input[name=typePoint]:radio:checked').val();
    var icon = getIcon(typePoint);
    
    var output = "<div class='popupMap'><div class='text'><h2>" + nom + "</h2><p>" + desc + "</p></div></div>";
    var options = {
        'minWidth': 500
    }
    
    if((nom != "") && (desc != "") && (typePoint != null)) {
        L.marker([actualLat, actualLong], {icon: icon}).addTo(markers).bindPopup(output, options);
        isError(false);
        // ajout bd
        var parametres = {
            titre: nom,
            comm: desc,
            url_vignette: "url",
            id_utilisateur: 1,
            type_point: typePoint,
            lon: actualLong,
            lat: actualLat,
            controller: 'point',
            action: 'add'
        };
        $.getJSON(APP_URL+DISPATCHER, parametres);
    }
    else{
        isError(true);
    }
}
function setHeight(){
	var heightWindow = $(window).height();
	var heightMenu = $("#main-nav").height();
	var heightFooter = $("#footer").height();
	
	
	
	var diff = heightWindow - heightMenu - heightMenu;
	
//	$("#main-page").css('min-height', diff);
	$("#form").css('min-height', diff);
	$("#map").css('min-height', diff);
	
//	$("#content").css('min-height', diff);
	
}
