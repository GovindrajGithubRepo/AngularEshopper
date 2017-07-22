(function(angular){
    var app = angular.module('eshopperApp');
    
    var eshopperFooterCtrl = function($http){

        $http.get('src/json/footerImagesLink.json').then(function(obj){

                this.eshoppervideoData = obj.data.eshoppervideo;

            }.bind(this), function(err){

                //alert("Something went wrong for footer product !!");

        });    


        $http.get('src/json/footerlinksglobal.json').then(function(obj){

            this.serviceData = obj.data.service;
            this.quickShopData = obj.data.quickshop;
            this.policiesData = obj.data.policy;
            this.aboutshopperData = obj.data.aboutshopper;

        }.bind(this), function(err){

            alert("Something went wrong!!");

        });        

      }
    

    app.component('eshopperFooter', {    
           templateUrl:'src/components/eshopper-footer-component/eshopper-footer-component.html',
           controller: eshopperFooterCtrl

    });

})(window.angular);
