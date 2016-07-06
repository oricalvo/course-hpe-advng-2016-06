"use strict";
var ComponentBase = (function () {
    function ComponentBase($scope, $attrs) {
        var _this = this;
        this.scope = $scope;
        this.injector = angular.injector([function ($provide) {
                _this.provide = $provide;
            }]);
        console.log($attrs);
        for (var key in $attrs) {
            if (key[0] == "#") {
                var propName = key.substring(1);
                console.log(propName);
                $scope.$parent.$ctrl[propName] = this;
            }
        }
    }
    ComponentBase.prototype.getService = function (name) {
        return ComponentBase.internalGetService(this, name);
    };
    ComponentBase.internalGetService = function (comp, name) {
        while (true) {
            if (comp.injector.has(name)) {
                return comp.injector.get(name);
            }
            comp = ComponentBase.getParentWithInjector(comp);
            if (comp == null) {
                throw new Error("No service with name: " + name + " was found");
            }
        }
    };
    ComponentBase.getParentWithInjector = function (comp) {
        var scope = comp.scope.$parent;
        while (true) {
            if (scope.$ctrl && scope.$ctrl.injector) {
                return scope.$ctrl;
            }
            scope = scope.$parent;
            if (scope.$parent == null) {
                return null;
            }
        }
    };
    return ComponentBase;
}());
exports.ComponentBase = ComponentBase;
//# sourceMappingURL=ComponentBase.js.map