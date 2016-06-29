(function() {
    "use strict";
    
    function ServiceLoader(di, $injector) {
        return {
            load: function(serviceName) {
                return System.import(serviceName + ".js").then(function() {
                    //di.value(serviceName, service);

                    //return service;
                    
                    var service = $injector.get(serviceName);
                    return service;
                });
            }
        };
    }
    
    angular.module("myApp").factory("serviceLoader", ServiceLoader);
})();
