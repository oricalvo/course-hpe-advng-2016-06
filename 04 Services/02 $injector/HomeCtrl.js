(function() {
    "use strict";
    
    function HomeCtrl($scope, $injector) {
        $scope.message = "Hello Ng";

        $scope.run = function() {

            // var args = [];
            // var inject = ["$compile", "$parse", "$http"];
            // inject.forEach(function(name) {
            //     args.push($injector.get(name));
            // });
            // doSomething.apply(this, args);

            $injector.invoke(doSomething, this, {abc: 123});

            //domSomething($compile)
        }
    }

    //doSomething.$inject = ["$compile", "$parse", "$http"];
    function doSomething($compile, _$parse_, $http, blabla, abc) {
        console.log("doSomething: " + abc);
    }

    // function doSomething($compile) {
    //     console.log("doSomething");
    // }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
