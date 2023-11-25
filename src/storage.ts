
export const setLocalStorage = (key: string, value: any) => {
  try {
    const valueToStore = (typeof value === 'object') ? JSON.stringify(value) : value;
    localStorage.setItem(key, valueToStore);
  } catch (error) {
    return {
      error: true,
      message: `Error setting localStorage item: ${error}`,
    }
  }
};


export const getLocalStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  } catch (error) {
    return {
      error: true,
      message: `Error getting localStorage item: ${error}`,
    }
  }
};


export const removeItemLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
    return null;
  } catch (error) {
    return {
      error: true,
      message: `Error removing localStorage item: ${error}`,
    }
  }
}

export const clearLocalStorage = () => {
  try {
    localStorage.clear();
    return null;
  } catch (error) {
    return {
      error: true,
      message: `Error clearing localStorage: ${error}`,
    }
  }
}


