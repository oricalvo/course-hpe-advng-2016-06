var module = angular.module("myApp", []);

module.run(["$rootScope", function($rootScope) {
    var Scope = $rootScope.constructor;

    var originalApply = Scope.prototype.$apply;
    Scope.prototype.$apply = function() {
        var before = new Date();

        console.log("APPLY BEGIN: " + $rootScope.$$watchersCount);

        var res = originalApply.apply(this, arguments);

        var after = new Date();

        console.log("APPLY END: " + (after - before));

        return res;
    }

    var originalDigest = Scope.prototype.$digest;
    Scope.prototype.$digest = function() {
        var before = new Date();

        console.log("DIGEST BEGIN");

        var res = originalDigest.apply(this, arguments);

        var after = new Date();

        console.log("DIGEST END: " + (after - before));

        return res;
    }

    // $rootScope.$watch(function() {
    //     console.log("ITERATION");
    // });
}]);
