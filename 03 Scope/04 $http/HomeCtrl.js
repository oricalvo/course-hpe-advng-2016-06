(function() {
    "use strict";
    
    function HomeCtrl($scope, $http) {
        $scope.message = "Ori";
        $scope.email = "Ori@gmail.com";

        $scope.run = function() {

            for(var i=0; i<3; i++) {
                setTimeout(function () {
                    console.log("COMPLETE");

                    $scope.$applyAsync(function() {
                        $scope.message += "X";
                    });

                    // $scope.$evalAsync(function() {
                    //     $scope.message += "X";
                    // });

                    // $scope.$apply(function() {
                    //     $scope.message += "X";
                    // });
                }, 0);
            }

            // $http.get("contacts.json").then(function() {
            //     console.log("OK1");
            // });
            //
            // $http.get("contacts.json").then(function() {
            //     console.log("OK2");
            // });
            //
            // $http.get("contacts.json").then(function() {
            //     console.log("OK3");
            // });
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
