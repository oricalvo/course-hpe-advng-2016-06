(function() {
    "use strict";
    
    function HomeCtrl($scope, $rootScope, $element, $timeout, $parse) {
        $scope.message = "Ori";
        $scope.email = "Ori@gmail.com";

        $scope.run = function() {
            $scope.message += "X";
        }

        $scope.$watch("email", function() {
            console.log("EMAIL changed");
        });
        
        $scope.$watch("message", function() {
            console.log("MESSAGE changed");

            $scope.email += "X";
        });

    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
