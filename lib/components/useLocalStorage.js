"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
var react_1 = require("react");
function useLocalStorage(key, initialValue) {
    var _a = react_1.useState(function () {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.log(error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        if (typeof window !== 'undefined') {
            try {
                var valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
            catch (error) {
                return {
                    error: true,
                    message: "Error setting localStorage item: " + error,
                };
            }
        }
    };
    var removeValue = function () {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.removeItem(key);
                setStoredValue(initialValue); // opcional: resetar o valor armazenado no estado
            }
            catch (error) {
                return {
                    error: true,
                    message: "Error removing localStorage item: " + error,
                };
            }
        }
    };
    var removeFromStoredArrayById = function (idToRemove) {
        if (typeof window !== 'undefined') {
            try {
                var currentArray = JSON.parse(window.localStorage.getItem(key) || '[]');
                var updatedArray = currentArray.filter(function (item) { return +item.id !== +idToRemove; });
                window.localStorage.setItem(key, JSON.stringify(updatedArray));
                setStoredValue(updatedArray);
            }
            catch (error) {
                return {
                    error: true,
                    message: "Error removing item by ID from localStorage array: " + error,
                };
            }
        }
    };
    var pushToStoredArray = function (item) {
        if (typeof window !== 'undefined') {
            try {
                var currentArray = JSON.parse(window.localStorage.getItem(key) || '[]');
                var updatedArray = __spreadArray(__spreadArray([], currentArray), [item]);
                window.localStorage.setItem(key, JSON.stringify(updatedArray));
                setStoredValue(updatedArray);
            }
            catch (error) {
                return {
                    error: true,
                    message: "Error adding item to localStorage array: " + error,
                };
            }
        }
    };
    return [storedValue, setValue, pushToStoredArray, removeValue, removeFromStoredArrayById];
}
exports.useLocalStorage = useLocalStorage;
