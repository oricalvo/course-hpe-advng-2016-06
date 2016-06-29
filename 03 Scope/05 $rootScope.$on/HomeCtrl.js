(function() {
    "use strict";

    var nextId = 1;
    function HomeCtrl($scope, $rootScope) {
        var id = nextId++;

        console.log("CTOR: " + id);

        $scope.message = "Ori";

        var off = $rootScope.$on("blabla", function() {
            console.log("BLABLA: " + id);
        });

        $scope.$on("$destroy", function() {
            off();
        });

        // $scope.$on("blabla", function() {
        //     console.log("BLABLA: " + id);
        // });
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
