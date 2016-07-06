"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app_1 = require("./app");
var ComponentBase_1 = require("./ComponentBase");
var ClockComponent = (function (_super) {
    __extends(ClockComponent, _super);
    function ClockComponent($interval, $scope, $attrs) {
        _super.call(this, $scope, $attrs);
        this.$interval = $interval;
        this.time = new Date();
        this.internalFormat = this.format = this.format || "HH:mm:ss";
        this.intervalId = null;
        this.start();
        var localDispatcher = this.getService("localDispatcher");
        localDispatcher.subscribe("sync", function () {
            console.log("sync caught");
        });
    }
    ClockComponent.prototype.$onChanges = function () {
        console.log("$onChanges");
        this.internalFormat = this.format;
    };
    ClockComponent.prototype.start = function () {
        var _this = this;
        if (this.intervalId) {
            return;
        }
        this.intervalId = this.$interval(function () {
            _this.time = new Date();
            _this.onTick({
                $event: {
                    time: _this.time,
                }
            });
        }, 1000);
    };
    ClockComponent.prototype.stop = function () {
        if (this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    };
    return ClockComponent;
}(ComponentBase_1.ComponentBase));
exports.ClockComponent = ClockComponent;
app_1.appModule.component("clock", {
    template: require("./clock.html!text"),
    controller: ClockComponent,
    styles: require("./clock.css!css"),
    bindings: {
        format: "<",
        model: "<",
        onTick: "&",
    }
});
//# sourceMappingURL=clock.js.map