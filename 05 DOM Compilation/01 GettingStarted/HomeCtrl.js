(function() {
    "use strict";
    
    function HomeCtrl($scope, $rootScope, $element, $compile) {
        $scope.xxx = "Hello";

        $scope.change = function() {
            $scope.xxx = "123";
        }

        $scope.run = function() {
            var template = angular.element("<div>{{num}}</div>");

            var linkFn = $compile(template);

            for(var i=0; i<10; i++) {
                var scope = $scope.$new();

                scope.num = i;

                //linkFn(scope);

                var cloneElement = linkFn(scope, function(){});
                cloneElement.appendTo($element);
            }


            console.log(template[0].outerHTML);

            linkFn($scope);
            console.log(template[0].outerHTML);

            $element.prepend(template);

            // $scope.$applyAsync(function() {
            //     console.log(template[0].outerHTML);
            // });

            // $scope.$$postDigest(function() {
            //     console.log(template[0].outerHTML);
            // });

            // setTimeout(function() {
            //     console.log(template[0].outerHTML);
            // }, 0);

            // $timeout(function() {
            //     console.log(template[0].outerHTML);
            // }, 0);

        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
