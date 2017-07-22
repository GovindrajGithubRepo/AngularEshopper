(function(angular) {

    "use strict";

    var app = angular.module('eshopperApp');

    var eshopperBrandCtrl = function($http) {

        $http.get('src/json/brands.json').then(function(obj) {

            this.categoryBrandData = obj.data;

        }.bind(this), function(err) {

            // alert("Something went wrong!!");

        });

    }

    app.component('eshopperBrands', {

        templateUrl: 'src/components/eshopper-brands-component/eshopper-brands-component.html',
        controller: eshopperBrandCtrl

    });

})(window.angular);