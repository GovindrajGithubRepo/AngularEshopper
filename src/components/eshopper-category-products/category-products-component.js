(function(angular){

    "use strict";

    var app = angular.module('eshopperApp');
    
        var eshopperCategoryCtrl = function($http){
                    
            $http.get('src/json/featureproductslist.json').then(function(obj) {

                this.categoryProductData = obj.data.productCategoryList;
              
            }.bind(this), function(err) {

               // alert("Something went wrong!!");

            });
     
    }

    app.component('eshopperCategoryNavigation', {
    
           templateUrl:'src/components/eshopper-category-products/category-products-component.html',
           controller: eshopperCategoryCtrl

    });

})(window.angular);
