[persist-pro](README.md) / Exports

# persist-pro

## Table of contents

### Variables

- [default](modules.md#default)

### Functions

- [useLocalStorage](modules.md#uselocalstorage)

## Variables

### default

• `Const` **default**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clearLocalStorage` | () => ``null`` \| { `error`: *boolean* = true; `message`: *string*  } |
| `getLocalStorage` | (`key`: *string*) => *any* |
| `pushToStoredArray` | (`key`: *string*, `value`: *any*) => *undefined* \| { `error`: *boolean* = true; `message`: *string*  } |
| `removeItemLocalStorage` | (`key`: *string*) => ``null`` \| { `error`: *boolean* = true; `message`: *string*  } |
| `setLocalStorage` | (`key`: *string*, `value`: *any*) => *undefined* \| { `error`: *boolean* = true; `message`: *string*  } |

Defined in: [index.ts:12](https://github.com/vitor-nogueira-dev/use-storage/blob/b216ea9/src/index.ts#L12)

## Functions

### useLocalStorage

▸ **useLocalStorage**(`key`: *string*, `initialValue`: *any*): *any*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `initialValue` | *any* |

**Returns:** *any*[]

Defined in: [components/useLocalStorage.ts:3](https://github.com/vitor-nogueira-dev/use-storage/blob/b216ea9/src/components/useLocalStorage.ts#L3)
