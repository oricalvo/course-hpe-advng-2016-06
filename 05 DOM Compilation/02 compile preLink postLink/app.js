var module = angular.module("myApp", []);

module.config(function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
});

module.run(["$rootScope", function($rootScope) {
    $rootScope.showCtrl = true;
}]);
