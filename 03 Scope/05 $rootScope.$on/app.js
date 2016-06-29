var module = angular.module("myApp", []);

module.run(["$rootScope", function($rootScope) {
    var Scope = $rootScope.constructor;

    $rootScope.show = true;
    
}]);
