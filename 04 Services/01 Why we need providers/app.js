var module = angular.module("myApp", []);

module.factory("blabla", function() {
    var service = {};
    
    return service;
});

module.config(function($locationProvider, blablaProvider) {
    console.log(!!blablaProvider);
    $locationProvider.html5Mode(true);

    var get = blablaProvider.$get;
    blablaProvider.$get = function() {
        console.log("blabla was created and patched");

        return get.apply(this, arguments);
    }
});
