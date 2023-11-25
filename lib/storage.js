"use strict";
// storage.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.setLocalStorage = void 0;
var setLocalStorage = function (key, value) {
    try {
        // Se o valor é um objeto (incluindo arrays), ele é serializado; caso contrário, é armazenado como está.
        var valueToStore = (typeof value === 'object') ? JSON.stringify(value) : value;
        localStorage.setItem(key, valueToStore);
    }
    catch (error) {
        console.error("Error setting localStorage item: " + error);
    }
};
exports.setLocalStorage = setLocalStorage;
// storage.ts
var getLocalStorage = function (key) {
    try {
        var item = localStorage.getItem(key);
        // Tenta desserializar, se falhar, retorna o item como está (para strings simples).
        return item ? JSON.parse(item) : item;
    }
    catch (error) {
        console.error("Error getting localStorage item: " + error);
        return null;
    }
};
exports.getLocalStorage = getLocalStorage;
