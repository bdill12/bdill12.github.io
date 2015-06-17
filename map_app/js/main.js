var markers = [{
        "name": "Museum",
        "latitude": 34.150085,
        "longitude": -118.33877,
        "search": "Water Restroom"
    }, {
        "name": "Stage 9",
        "latitude": 34.147704,
        "longitude": -118.340362,
        "search": "Water Restroom"
    }, {
        "name": "Audience staging",
        "latitude": 34.147538,
        "longitude": -118.33566,
        "search": "Restroom"
    }, {
        "name": "Mill Store",
        "latitude": 34.147026,
        "longitude": -118.339147,
        "search": "Water Restroom Soda Food"
    }, {
        "name": "Stage 25",
        "latitude": 34.148641,
        "longitude": -118.337642,
        "search": "Water Restroom Soda"
    }, {
        "name": "Parking/ Costumes",
        "latitude": 34.147324,
        "longitude": -118.335448,
        "search": "Water Restroom Soda (West Side)"
    }, {
        "name": "Commisary",
        "latitude": 34.149290,
        "longitude": -118.338918,
        "search": "Water Restroom Soda Food"
    }, {
        "name": "Avon Grill",
        "latitude": 34.148892,
        "longitude": -118.33565,
        "search": "Water Restroom Soda Food"
    }, {
        "name": "Tan building",
        "latitude": 34.149325,
        "longitude": -118.33433,
        "search": "Restroom outside Jungle"
    }, {
        "name": "Hennessey",
        "latitude": 34.150042,
        "longitude": -118.337089,
        "search": "Restroom"
    }, {
        "name": "Post-Production",
        "latitude": 34.150277,
        "longitude": -118.33922,
        "search": "Restroom"
    }, {
        "name": "Ellen's talent entrance",
        "latitude": 34.148367,
        "longitude": -118.341735,
        "search": "Restroom (not for guests)"
    }, {
        "name": "Stage 21",
        "latitude": 34.147678,
        "longitude": -118.338487,
        "search": "Restroom"
    }, {
        "name": "Bridge cafe",
        "latitude": 34.147937,
        "longitude": -118.33490,
        "search": "Water Restroom Soda Food"
    }];

    //Style the Map
    var styleArray = [{
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{
            color: "#7f8c8d"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#2c3e50"
        }]

    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#2ecc71"
        }]
    }, {
        featureType: "poi.medical",
        elementType: "geometry",
        stylers: [{
            color: "#c0392b"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            color: "#c0392b"
        }, {
            saturation: -50
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];
    if (window.innerWidth <= 480){
        var mapOptions = {
        center: {
            lat: 34.148955,
            lng: -118.337912
        },
        zoom: 16,
        styles: styleArray,
    };
    } else {
        var mapOptions = {
        center: {
            lat: 34.148955,
            lng: -118.337912
        },
        zoom: 17,
        styles: styleArray,
    };
    }


    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infowindow = new google.maps.InfoWindow();

    var myMarkers = [];

    var clearMap = function() {
        for (var i = 0; i < myMarkers.length; i++) {
            myMarkers[i].map = null;
        }
        myMarkers = [];
    };

    var listener = function() {
        infowindow.close();
        infowindow.setContent("<div class='infowindow' id='infoTwo'><h2>" + this.title + "</h2><p>" + this.search + "</p></div>");
        infowindow.open(map, this);
    };

waterMarkers = function() {
        clearMap();
        for (var i = 0; i < markers.length; i++) {
            var myLatLngMark = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);

            var marker = new google.maps.Marker({
                position: myLatLngMark,
                map: map,
                title: markers[i].name,
                search: markers[i].search
            });
            new google.maps.event.addListener(marker, 'mouseup', listener);
            myMarkers.push(marker);
        }

    };
waterMarkers();

/*
 * The google.maps.event.addListener() event waits for
 * the creation of the infowindow HTML structure 'domready'
 * and before the opening of the infowindow defined styles
 * are applied.
 */
google.maps.event.addListener(infowindow, 'domready', function() {

   // Reference to the DIV which receives the contents of the infowindow using jQuery
   var iwOuter = $('.gm-style-iw');

   /* The DIV we want to change is above the .gm-style-iw DIV.
    * So, we use jQuery and create a iwBackground variable,
    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
    */
   var iwBackground = iwOuter.prev();

   // Remove the background shadow DIV
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

   // Remove the white background DIV
   iwBackground.children(':nth-child(4)').css({'display' : 'none'});

});