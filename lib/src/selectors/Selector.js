"use strict";
var protractor_1 = require("protractor");
var Selector = (function () {
    function Selector(value) {
        this.value = value;
    }
    Selector.prototype.locatorCSS = function () {
        return "";
    };
    Selector.prototype.toLocator = function () {
        return protractor_1.By.css(this.locatorCSS());
    };
    Selector.prototype.toElement = function (element) {
        return element.element(this.toLocator());
    };
    return Selector;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Selector;
//# sourceMappingURL=Selector.js.map