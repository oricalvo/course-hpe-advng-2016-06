"use strict";
var EventEmitter = (function () {
    function EventEmitter() {
        this.listeners = [];
    }
    EventEmitter.prototype.raise = function (name) {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    EventEmitter.prototype.subscribe = function (name, listener) {
        this.listeners.push(listener);
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map