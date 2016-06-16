"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point_1 = require("./Point");
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    PointEx.prototype.dump = function () {
        _super.prototype.dump.call(this);
        console.log(this.z);
    };
    return PointEx;
}(Point_1.Point));
exports.PointEx = PointEx;
//# sourceMappingURL=PointEx.js.map