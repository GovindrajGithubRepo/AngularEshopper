(function(angular) {
    var app = angular.module('eshopperApp');

    var eshopperFeatureProductCtrl = function($http) {

        $http.get('src/json/featureproductslist.json').then(function(obj) {

            this.productFeatureData = obj.data.productFeature;

        }.bind(this), function(err) {

            //alert("Something went wrong for footer product !!");

        });

    }


    app.component('eshopperFeature', {
        templateUrl: 'src/components/eshopper-feature-component/eshopper-feature-component.html',
        controller: eshopperFeatureProductCtrl

    });

})(window.angular);