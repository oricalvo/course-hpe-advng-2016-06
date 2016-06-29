var module = angular.module("myApp", []);

var providerInjector;
var temp;

module.config(function myconfig($injector) {
    providerInjector = $injector;
    temp = $injector;

});

module.run(function myrun($injector) {
    console.log($injector == temp);

    $injector.get("$location");
    providerInjector.get("$locationProvider");
});
