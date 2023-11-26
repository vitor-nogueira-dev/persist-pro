
export { useLocalStorage } from './components/useLocalStorage';

import {
  setLocalStorage,
  getLocalStorage,
  removeItemLocalStorage,
  clearLocalStorage,
  pushToStoredArray,
} from './storage';

const PersistPro = {
  setLocalStorage,
  getLocalStorage,
  removeItemLocalStorage,
  clearLocalStorage,
  pushToStoredArray,
};


export default PersistPro;
