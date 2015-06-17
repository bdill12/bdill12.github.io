// Initialize the Map after DOM is loade
var map;
function createMarkers() {
    'use strict';
    var i, prefix, result, tips, marker;
    var Model = {
        limit: 50,
        radius: 600,
        latitude: 34.146580,
        longitude: -118.147700,
        clientId: 'OSDBVMKK4BLXPU14JLBUB0HVLVMNUIRHBTLRA33LUMSFH2BT',
        clientSecret: 'AE41EWYBOYBGY5AKSW5DBPRQW2DD5MK3Y1YLCLO3KTBQITSG'
    };

    var ViewModel = function() {
        // Create Observable Variables and Arrays
        var self = this;
        self.warnerBros = new google.maps.LatLng(34.148955, -118.337912);
        self.searchQuery = ko.observable("");

        self.myMarkers = ko.observableArray();

        self.searchView = ko.observable(true);
        self.show = ko.observable(false);
        self.hide = ko.observable(true);
        self.infoView = ko.observable(false);

        self.infoTitle = ko.observable();
        self.infoImage = ko.observable();
        self.infoPhoto = ko.observable();

        // Assign the Correct Values to each Variable and open Info Window
        self.infoWindow = function(clicked) {
            self.infoTitle(clicked.title);
            self.infoImage(clicked.photoURL);

            self.infoPhoto(clicked.photo);

            self.infoView(true);
        };

        // Close the Info Window, Stop the Animation, Scroll the Window Up for next Display
        self.infoClose = function() {
            $("#infowindow").scrollTop(0);
            self.infoView(false);
        };

        // Show or Hide the List View
        self.toggleSearch = function() {
            self.searchView(!self.searchView());
            self.show(!self.show());
            self.hide(!self.hide());
        };

        // Center Map on chosen Venue by panning and zooming. open info Window
        self.goToLocation = function(marked) {
            if (self.searchView()) {
                self.toggleSearch();
            }
            setTimeout(function() {
                map.panTo(marked.position);
            }, 250);
            setTimeout(function() {
                map.setZoom(19);
            }, 500);
            marked.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                self.infoWindow(marked);
            }, 750);
        };

        // Callback function for Maps Event Listeners, Activates Animation and calls infowindow and location
        self.listen = function() {
            self.infoWindow(this);
            self.goToLocation(this);
        };

        // Parse results from Foursquare API Venues Database
        self.parseResults = function(responses) {
                var markers = [];
                var miniResponse = responses.response.groups[0];
                for (var i = 0; i < miniResponse.items.length; i++) {
                    var prefix = miniResponse.items[i];
                    var result = prefix.venue;
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(result.location.lat, result.location
                            .lng),
                        map: map,
                        title: result.name,
                        photo: result.photos.groups[0].items[0].prefix + "800x200" + result.photos
                            .groups[0].items[0].suffix,
                        url: result.url,
                        category: result.categories[0].name
                    });
                    marker.search = marker.title + marker.phone + marker.twitter + marker.address1 + marker.category;
                    }
                    markers.push(marker);
                    google.maps.event.addListener(marker, 'click', self.listen);
                };
                self.myMarkers(markers);
            };

        }

        // Filter Venues
        self.filteredItems = ko.computed(function() {
            var filter = self.searchQuery().toLowerCase();
            if (!filter) {
                return self.myMarkers();
            } else {
                return ko.utils.arrayFilter(self.myMarkers(), function(item) {
                    if (item.search.toLowerCase().indexOf(filter) !== -1) {
                        item.setMap(map);
                        return item;
                    } else {
                    item.setMap(null);
                }
                }, self);
            }

        });

        // Reset to Original Venues
        self.clearSearch = function() {
            self.searchQuery("");
            self.needReset(false);
        };

        // Clear Markers from the Map
        self.clearMarkers = function() {
            for (var i = 0; i < self.myMarkers().length; i++) {
                self.myMarkers()[i].setMap(null);
            }
        };

        // Search the Foursquare Venues database for results
        self.foursquareSearch = function() {
            self.clearMarkers();
            self.myMarkers([]);
            };

        // Close Info Window if user clicks outside it
        $(document).mouseup(function(e) {
            var myWindow = $('#infowindow');
            if (!myWindow.is(e.target) && myWindow.has(e.target).length === 0) {
                self.infoClose();
            }
        });


        // Search on Return / Enter
        self.ifEnter = function(data, event) {
            if (event.which === 13) {
                self.searchQuery("");
            } else if (event.which === 8 || event.which === 46) {
            return true;
        }
    };
    ko.applyBindings(new ViewModel());


//Initialize
$(function initialize(){
    'use strict';

    var oldTownPasadena = new google.maps.LatLng(34.145815, -118.150425);

    // Set Map Options
    var mapOptions = {
        center: oldTownPasadena,
        zoom: 17,
        mapTypeControl: true,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
        },
        draggable: true
    };

    // Create Map Object
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

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

    // Apply Styles
    map.setOptions({styles: styleArray});

    //
    createMarkers();
});