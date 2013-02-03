/* ria.exos.flatland.be - Notes de cours en ligne pour le cours de RIA - Applications Internet Riches
 * JS Document - /html5/test_one/js/script.js
 * coded by Etienne Denoel (2383)
 * october 2012
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*global jQuery, google */

( function ( $ ) {
    var generateMap = function(){
            gmap = new google.maps.Map(document.getElementById("gmap"),{
                    zoom:1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: new google.maps.LatLng(0,0),
                    mapTypeControl: true

            });

    };
    var addMarker = function(){
    	var $tab = ;
    	for(var i = 0; i< $tab.length; i++){
    		var position[i] =  $tab[i].attr( 'data-position' ).split( ',' );
	    	var marker[i] = new google.maps.Marker({
	                        map:gmap,
	                        position[i]: new google.maps.LatLng(parseFloat( position[i][0] ), parseFloat( aMarkerPosition[i][1] )),
	        });
    	}

    };


$(function(){
    generateMap();
    addMarker();
});

}( jQuery ) );
