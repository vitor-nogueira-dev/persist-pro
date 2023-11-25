import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initialValue: string) {
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

  const removeValue = (key: string) => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        return {
          error: true,
          message: `Error removing localStorage item: ${error}`,
        }
      }
    }
  };

  return [storedValue, setValue, removeValue];
}
