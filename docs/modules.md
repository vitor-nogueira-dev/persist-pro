[persist-pro](README.md) / Exports

# persist-pro

## Table of contents

### Functions

- [clearLocalStorage](modules.md#clearlocalstorage)
- [getLocalStorage](modules.md#getlocalstorage)
- [removeItemLocalStorage](modules.md#removeitemlocalstorage)
- [setLocalStorage](modules.md#setlocalstorage)
- [useLocalStorage](modules.md#uselocalstorage)

## Functions

### clearLocalStorage

▸ `Const` **clearLocalStorage**(): ``null`` \| { `error`: *boolean* = true; `message`: *string*  }

**Returns:** ``null`` \| { `error`: *boolean* = true; `message`: *string*  }

Defined in: storage.ts:40

___

### getLocalStorage

▸ `Const` **getLocalStorage**(`key`: *string*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *any*

Defined in: storage.ts:15

___

### removeItemLocalStorage

▸ `Const` **removeItemLocalStorage**(`key`: *string*): ``null`` \| { `error`: *boolean* = true; `message`: *string*  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** ``null`` \| { `error`: *boolean* = true; `message`: *string*  }

Defined in: storage.ts:28

___

### setLocalStorage

▸ `Const` **setLocalStorage**(`key`: *string*, `value`: *any*): *undefined* \| { `error`: *boolean* = true; `message`: *string*  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | *any* |

**Returns:** *undefined* \| { `error`: *boolean* = true; `message`: *string*  }

Defined in: storage.ts:2

___

### useLocalStorage

▸ **useLocalStorage**(`key`: *string*, `initialValue`: *string*): *any*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `initialValue` | *string* |

**Returns:** *any*[]

Defined in: components/useLocalStorage.ts:3
