'use strict';

var app = app || {};

(function (module) {

    const mapView = {};

    mapView.initHomePage = () => {
        $('main section').hide();
    };

    module.mapView = mapView;

})(app);

console.log(app);