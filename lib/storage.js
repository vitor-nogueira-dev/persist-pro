"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLocalStorage = exports.removeItemLocalStorage = exports.getLocalStorage = exports.setLocalStorage = void 0;
var setLocalStorage = function (key, value) {
    try {
        var valueToStore = (typeof value === 'object') ? JSON.stringify(value) : value;
        localStorage.setItem(key, valueToStore);
    }
    catch (error) {
        return {
            error: true,
            message: "Error setting localStorage item: " + error,
        };
    }
};
exports.setLocalStorage = setLocalStorage;
var getLocalStorage = function (key) {
    try {
        var item = localStorage.getItem(key);
        return item ? JSON.parse(item) : item;
    }
    catch (error) {
        return {
            error: true,
            message: "Error getting localStorage item: " + error,
        };
    }
};
exports.getLocalStorage = getLocalStorage;
var removeItemLocalStorage = function (key) {
    try {
        localStorage.removeItem(key);
        return null;
    }
    catch (error) {
        return {
            error: true,
            message: "Error removing localStorage item: " + error,
        };
    }
};
exports.removeItemLocalStorage = removeItemLocalStorage;
var clearLocalStorage = function () {
    try {
        localStorage.clear();
        return null;
    }
    catch (error) {
        return {
            error: true,
            message: "Error clearing localStorage: " + error,
        };
    }
};
exports.clearLocalStorage = clearLocalStorage;
