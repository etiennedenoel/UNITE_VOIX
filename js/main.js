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
$(function(){
    generateMap();
});

}( jQuery ) );
