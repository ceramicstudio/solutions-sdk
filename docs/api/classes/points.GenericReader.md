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

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

___

### issuer

• `get` **issuer**(): `string`

#### Returns

`string`

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

## Methods

### queryDocuments

▸ **queryDocuments**(`options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

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
