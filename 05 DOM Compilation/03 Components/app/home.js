"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app_1 = require("./app");
require("./clock");
var ComponentBase_1 = require("./ComponentBase");
var EventEmitter_1 = require("./EventEmitter");
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent($scope, $attrs) {
        _super.call(this, $scope, $attrs);
        this.clockFormat = 'ss';
        this.model = {};
        this.provide.service("localDispatcher", EventEmitter_1.EventEmitter);
    }
    HomeComponent.prototype.change = function () {
        //console.log("change");
        //this.clockFormat = 'mm:ss';
        //this.model = {};
        this.model.id = 123;
    };
    HomeComponent.prototype.onClockTick = function (args) {
        //console.log("Tick: " + args.time);
    };
    HomeComponent.prototype.stop = function () {
        this.clock1.stop();
    };
    HomeComponent.prototype.syncClocks = function () {
        var dispatcher = this.getService("localDispatcher");
        console.log("sync raised");
        dispatcher.raise("sync");
    };
    return HomeComponent;
}(ComponentBase_1.ComponentBase));
app_1.appModule.component("home", {
    template: require("./home.html!text"),
    controller: HomeComponent,
    styles: require("./home.css!css"),
});
//# sourceMappingURL=home.js.map