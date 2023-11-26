"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
var useLocalStorage_1 = require("./components/useLocalStorage");
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return useLocalStorage_1.useLocalStorage; } });
var storage_1 = require("./storage");
var PersistPro = {
    setLocalStorage: storage_1.setLocalStorage,
    getLocalStorage: storage_1.getLocalStorage,
    removeItemLocalStorage: storage_1.removeItemLocalStorage,
    clearLocalStorage: storage_1.clearLocalStorage,
    pushToStoredArray: storage_1.pushToStoredArray,
};
exports.default = PersistPro;
