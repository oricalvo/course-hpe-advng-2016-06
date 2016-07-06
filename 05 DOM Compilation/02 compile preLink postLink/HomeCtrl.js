(function() {
    "use strict";
    
    function HomeCtrl($scope, $rootScope, $element, $compile) {
        console.log(!!$scope.form1);

        this.$onInit = function() {
            console.log(!!$scope.form1);
        }

        this.$postLink = function() {
            console.log(!!$scope.form1);
        }

        $scope.$watch("model", function() {
        });

        // setTimeout(function() {
        //     console.log(!!$scope.form1);
        // }, 0);

        $scope.num = 0;
        var template = angular.element("<counter model='num'></counter>");
        var linkFn;
        
        $scope.change = function() {
            $scope.xxx = "123";
        }

        $scope.compile = function() {
            linkFn = $compile(template);
        }
        
        $scope.link = function() {
            linkFn($scope);
            
            //linkFn(scope, function(clone){});
            
            $element.append(template);
        }
        
        $scope.change = function() {
            $scope.num++;
        }
    }

    angular.module("myApp").directive("counter", function() {
        var nextId = 1;

        var ddo = {
            restrict: "E",
            priority: 0,
            scope: {},
            controller: function ($scope) {
                console.log("CONTROLLER counter");
            },
            compile: function(element, attrs) {
                var id = nextId++;
                console.log("COMPILE counter: " + id);

                var modelName = attrs.model;

                return {
                    pre: function(scope, element, attrs) {
                        console.log("PRELINK counter: " + id);

                        scope.$watch(modelName, function(newValue) {
                            element.html(newValue);
                        });
                    },
                    post: function() {
                        console.log("POSTLINK counter " + id);
                    }
                };
            }
        };

        return ddo;
    });

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
