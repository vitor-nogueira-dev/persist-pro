"use strict";
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
    var removeValue = function (key) {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.removeItem(key);
                // setStoredValue(initialValue); // Remova ou ajuste esta linha conforme necessário
            }
            catch (error) {
                return {
                    error: true,
                    message: "Error removing localStorage item: " + error,
                };
            }
        }
    };
    return [storedValue, setValue, removeValue];
}
exports.useLocalStorage = useLocalStorage;
