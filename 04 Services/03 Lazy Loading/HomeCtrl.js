(function() {
    "use strict";
    
    function HomeCtrl($scope, $injector, serviceLoader) {
        $scope.load = function() {
            serviceLoader.load("myService").then(function(service) {
                service.run();
            });
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
