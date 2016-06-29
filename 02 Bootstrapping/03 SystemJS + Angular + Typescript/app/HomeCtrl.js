"use strict";
var app_1 = require("./app");
function HomeCtrl($scope, $rootScope, $element) {
    console.log("HomeCtrl");
    $scope.message = "Hello Ng";
    $element.on("$destroy", function () {
        console.log("jQuery.$destroy");
    });
    $scope.clean = function () {
        $element.remove();
        //$rootScope.showCtrl = false;
    };
    $scope.$on("$destroy", function () {
        console.log("HomeCtrl.destroy");
    });
}
app_1.appModule.controller("HomeCtrl", [
    "$scope",
    "$rootScope",
    "$element",
    HomeCtrl
]);
//# sourceMappingURL=HomeCtrl.js.map