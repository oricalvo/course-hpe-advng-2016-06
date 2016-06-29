"use strict";
var app_1 = require("./app");
var MyService = (function () {
    function MyService() {
    }
    MyService.prototype.run = function () {
    };
    return MyService;
}());
app_1.appModule.service("myService", MyService);
//# sourceMappingURL=MyService.js.map