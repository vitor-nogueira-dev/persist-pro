export declare const setLocalStorage: (key: string, value: any) => {
    error: boolean;
    message: string;
} | undefined;
export declare const getLocalStorage: (key: string) => any;
export declare const removeItemLocalStorage: (key: string) => {
    error: boolean;
    message: string;
} | null;
export declare const clearLocalStorage: () => {
    error: boolean;
    message: string;
} | null;
export declare const pushToStoredArray: (key: string, value: any) => {
    error: boolean;
    message: string;
} | undefined;
//# sourceMappingURL=storage.d.ts.map