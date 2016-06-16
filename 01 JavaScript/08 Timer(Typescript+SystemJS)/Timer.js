"use strict";
var Timer = (function () {
    function Timer(interval) {
        this.interval = interval;
        this.intervalId = 0;
        this.callbacks = [];
    }
    Timer.prototype.start = function () {
        var _this = this;
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(function () {
            _this.raise();
        }, this.interval);
    };
    Timer.prototype.stop = function () {
        if (!this.intervalId) {
            return;
        }
        clearTimeout(this.intervalId);
        this.intervalId = 0;
    };
    Timer.prototype.subscribe = function (callback) {
        this.callbacks.push(callback);
    };
    Timer.prototype.unsubscribe = function (callback) {
        for (var i = 0; i < this.callbacks.length; i++) {
            if (this.callbacks[i] == callback) {
                this.callbacks.splice(i, 1);
                i--;
            }
        }
    };
    Timer.prototype.raise = function () {
        var args = {};
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(this, args);
        }
    };
    return Timer;
}());
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map