"use strict";
var app_1 = require("./app");
var HomeCtrl = (function () {
    function HomeCtrl() {
        this.message = "Hello Ng 2";
    }
    HomeCtrl.prototype.sayHello = function () {
        alert("Hello " + this.message);
    };
    HomeCtrl.prototype.clean = function () {
        console.log("Clean");
    };
    return HomeCtrl;
}());
app_1.appModule.controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map