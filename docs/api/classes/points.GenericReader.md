# Class: GenericReader\<Content\>

[points](../modules/points.md).GenericReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

## Hierarchy

- **`GenericReader`**

  ↳ [`ListWriter`](points.ListWriter.md)

  ↳ [`SetReader`](points.SetReader.md)

## Table of contents

### Constructors

- [constructor](points.GenericReader.md#constructor)

### Accessors

- [ceramic](points.GenericReader.md#ceramic)
- [issuer](points.GenericReader.md#issuer)
- [loader](points.GenericReader.md#loader)
- [modelID](points.GenericReader.md#modelid)

### Methods

- [queryDocuments](points.GenericReader.md#querydocuments)
- [queryDocumentsFor](points.GenericReader.md#querydocumentsfor)

## Constructors

### constructor

• **new GenericReader**\<`Content`\>(`params`): [`GenericReader`](points.GenericReader.md)\<`Content`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GenericReaderParams`](../modules/points.md#genericreaderparams) |

#### Returns

[`GenericReader`](points.GenericReader.md)\<`Content`\>

#### Defined in

[libraries/points/src/generic-reader.ts:24](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L24)

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Defined in

[libraries/points/src/generic-reader.ts:41](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L41)

___

### issuer

• `get` **issuer**(): `string`

#### Returns

`string`

#### Defined in

[libraries/points/src/generic-reader.ts:33](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L33)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Defined in

[libraries/points/src/generic-reader.ts:45](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L45)

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Defined in

[libraries/points/src/generic-reader.ts:37](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L37)

## Methods

### queryDocuments

▸ **queryDocuments**(`options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Defined in

[libraries/points/src/generic-reader.ts:49](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L49)

___

### queryDocumentsFor

▸ **queryDocumentsFor**(`did`, `options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Defined in

[libraries/points/src/generic-reader.ts:53](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L53)
