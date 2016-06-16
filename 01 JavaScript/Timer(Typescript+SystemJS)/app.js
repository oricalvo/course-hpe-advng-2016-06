"use strict";
var Timer_1 = require("./Timer");
var timer = new Timer_1.Timer(1000);
timer.subscribe(function () {
    console.log("Tick1");
});
timer.subscribe(function () {
    console.log("Tick2");
});
timer.start();
//# sourceMappingURL=app.js.map