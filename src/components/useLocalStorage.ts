import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    if (typeof window !== 'undefined') {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        return {
          error: true,
          message: `Error setting localStorage item: ${error}`,
        }
      }
    }
  };

  const removeValue = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key);
        setStoredValue(initialValue); // opcional: resetar o valor armazenado no estado
      } catch (error) {
        return {
          error: true,
          message: `Error removing localStorage item: ${error}`,
        }
      }
    }
  };

  const removeFromStoredArrayById = (idToRemove: any) => {
    if (typeof window !== 'undefined') {
      try {
        const currentArray = JSON.parse(window.localStorage.getItem(key) || '[]');
        const updatedArray = currentArray.filter((item: any) => +item.id !== +idToRemove);

        window.localStorage.setItem(key, JSON.stringify(updatedArray));
        setStoredValue(updatedArray);
      } catch (error) {
        return {
          error: true,
          message: `Error removing item by ID from localStorage array: ${error}`,
        }
      }
    }
  };

  const pushToStoredArray = (item: any) => {
    if (typeof window !== 'undefined') {
      try {
        const currentArray = JSON.parse(window.localStorage.getItem(key) || '[]');
        const updatedArray = [...currentArray, item];
        window.localStorage.setItem(key, JSON.stringify(updatedArray));
        setStoredValue(updatedArray);
      } catch (error) {
        return {
          error: true,
          message: `Error adding item to localStorage array: ${error}`,
        }
      }
    }
  };

  return [storedValue, setValue, pushToStoredArray, removeValue, removeFromStoredArrayById];
}
