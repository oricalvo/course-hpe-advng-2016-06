(function() {
    "use strict";
    
    function HomeCtrl($scope, $injector, contactService) {
        $scope.load = function() {

            contactService.getAll(function(contacts) {
                $scope.$applyAsync(function() {
                    $scope.contacts = contacts;
                });
            }, function(err) {
                console.log("ERROR");
            });
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
