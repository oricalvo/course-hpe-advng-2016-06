var module = angular.module("myApp", []);

module.run(["$rootScope", function($rootScope) {
    $rootScope.showCtrl = true;
}]);
