var module = angular.module("myApp", []);

module.config(function($provide) {
    $provide.value("di", $provide);
    
    module.factory = $provide.factory;
});
