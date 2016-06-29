(function() {
    "use strict";
    
    function HomeCtrl($scope, $injector, contactService, $q) {
        function delay(ms) {

            // return new Promise(function(resolve, reject) {
            //     setTimeout(function() {
            //         //resolve();
            //         reject("XXX");
            //     }, ms);
            // });

            var deferred = $q.defer();

            setTimeout(function() {
                //deferred.resolve();
                deferred.reject("XXX");
            }, ms);

            return deferred.promise;
        }

        $scope.load = function() {

            //Promise.all([
            $q.all([
                delay(500),
                delay(1000)
            ]).then(function() {
                console.log("1000");
            });
            // .catch(function() {
            //     console.log("ERROR");
            // });

            // contactService.getAll().then(function(contacts) {
            //     $scope.contacts = contacts;
            // }).catch(function(err) {
            //     console.log("ERROR");
            // });

            // contactService.getAll(function(contacts) {
            //     $scope.$applyAsync(function() {
            //         $scope.contacts = contacts;
            //     });
            // }, function(err) {
            //     console.log("ERROR");
            // });
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
