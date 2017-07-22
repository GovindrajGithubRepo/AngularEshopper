(function(angular){

    "use strict";

    var app = angular.module('eshopperApp');
    
        var eshopperHeaderCtrl = function($http){
                    
            $http.get('src/json/headerSocialLinks.json').then(function(obj) {

                this.socialIconData = obj.data.headerTopLinks;
              
            }.bind(this), function(err) {

               // alert("Something went wrong!!");

            });
     
    }

    app.component('eshopperHeader', {
    
           templateUrl:'src/components/eshopper-header-component/eshopper-header-component.html',
           controller: eshopperHeaderCtrl

    });

})(window.angular);
