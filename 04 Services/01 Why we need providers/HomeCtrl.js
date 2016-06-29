(function() {
    "use strict";
    
    function HomeCtrl($scope, $location, blabla) {
        console.log(!!blabla);

        $scope.message = "Hello Ng";

        $scope.run = function() {
            $location.url("abc?id=123");
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
