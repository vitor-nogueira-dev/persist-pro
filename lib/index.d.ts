export { useLocalStorage } from './components/useLocalStorage';
declare const PersistPro: {
    setLocalStorage: (key: string, value: any) => {
        error: boolean;
        message: string;
    } | undefined;
    getLocalStorage: (key: string) => any;
    removeItemLocalStorage: (key: string) => {
        error: boolean;
        message: string;
    } | null;
    clearLocalStorage: () => {
        error: boolean;
        message: string;
    } | null;
    pushToStoredArray: (key: string, value: any) => {
        error: boolean;
        message: string;
    } | undefined;
};
export default PersistPro;
//# sourceMappingURL=index.d.ts.map