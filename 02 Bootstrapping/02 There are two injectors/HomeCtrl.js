(function() {
    "use strict";

    //throw new Error("oops");

    //x = 10;
    
    //console.error("test");

    function HomeCtrl($scope, $rootScope, $element) {
        console.log("HomeCtrl");

        $scope.message = "Hello Ng";

        $element.on("$destroy", function() {
            console.log("jQuery.$destroy");
        });

        $scope.clean = function() {
            $element.remove();

            //$rootScope.showCtrl = false;
        }

        $scope.$on("$destroy", function() {
            console.log("HomeCtrl.destroy");
        });
    }

    angular.module("myApp").controller("HomeCtrl", [
        "$scope", 
        "$rootScope", 
        "$element",
        HomeCtrl
    ]);
})();
