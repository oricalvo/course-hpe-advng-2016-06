(function() {
    "use strict";
    
    function HomeCtrl($scope, $rootScope, $element, $timeout, $parse) {

        var obj = {
            a: {
                b: {
                    c: 10
                }
            }
        };
        
        var fn = $parse("a.b.c");
        console.log(fn(obj));
        
        $scope.name = "Ori";
        $scope.email = "ori@gmail.com";
        $scope.counter = 1;

        $scope.$watch("name", function(newValue, oldValue) {
            // if(newValue == oldValue) {
            //     return;
            // }

            console.log("name: " + oldValue + " --> " + newValue);

            $timeout(function() {
                console.log($scope.counter);
            }, 0);
        });

        $scope.$watch("email", function(newValue, oldValue) {
            // if(newValue == oldValue) {
            //     return;
            // }

            console.log("email: " + oldValue + " --> " + newValue);

            ++$scope.counter;
        });

        $scope.run = function() {
            $scope.name = "Roni";
            $scope.email = "roni@gmail.com";
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
