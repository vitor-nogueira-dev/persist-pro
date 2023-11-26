
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

function parseJSONOrReturnOriginal(value: any) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

export const getLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? parseJSONOrReturnOriginal(item) : item;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return {
      error: true,
      message: `Error getting localStorage item: ${error}`,
    };
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


export const pushToStoredArray = (key: string, value: any) => {
  try {
    const currentArray = JSON.parse(localStorage.getItem(key) || '[]');
    currentArray.push(value);
    localStorage.setItem(key, JSON.stringify(currentArray));
  } catch (error) {
    return {
      error: true,
      message: `Error appending to localStorage array: ${error}`,
    };
  }
};


