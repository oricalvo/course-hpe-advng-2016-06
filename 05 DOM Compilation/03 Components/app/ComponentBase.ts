export class ComponentBase {
    protected injector;
    protected provide;
    protected scope;

    constructor($scope, $attrs) {
        this.scope = $scope;

        this.injector = angular.injector([$provide => {
            this.provide = $provide;
        }]);

        console.log($attrs);
        for(let key in $attrs) {
            if(key[0] == "#") {
                let propName = key.substring(1);
                console.log(propName);

                $scope.$parent.$ctrl[propName] = this;
            }
        }
    }

    getService(name) {
        return ComponentBase.internalGetService(this, name);
    }

    private static internalGetService(comp: ComponentBase, name) {
        while(true) {
            if (comp.injector.has(name)) {
                return comp.injector.get(name);
            }

            comp = ComponentBase.getParentWithInjector(comp);
            if(comp == null) {
                throw new Error("No service with name: " + name + " was found");
            }
        }
    }

    private static getParentWithInjector(comp: ComponentBase) {
        var scope = comp.scope.$parent;
        while(true) {
            if(scope.$ctrl && scope.$ctrl.injector) {
                return scope.$ctrl;
            }

            scope = scope.$parent;
            if(scope.$parent == null) {
                return null;
            }
        }
    }
}
