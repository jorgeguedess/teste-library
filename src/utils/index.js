"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCapitalize = toCapitalize;
function toCapitalize(value) {
    return value ? value.replace(/^\w/, function (c) { return c.toUpperCase(); }) : "";
}
