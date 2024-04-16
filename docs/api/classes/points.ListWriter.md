# Class: ListWriter\<Content\>

[points](../modules/points.md).ListWriter

## Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

## Hierarchy

- [`GenericReader`](points.GenericReader.md)\<`Content`\>

  ↳ **`ListWriter`**

## Table of contents

### Constructors

- [constructor](points.ListWriter.md#constructor)

### Accessors

- [ceramic](points.ListWriter.md#ceramic)
- [issuer](points.ListWriter.md#issuer)
- [loader](points.ListWriter.md#loader)
- [modelID](points.ListWriter.md#modelid)

### Methods

- [createDocument](points.ListWriter.md#createdocument)
- [queryDocuments](points.ListWriter.md#querydocuments)
- [queryDocumentsFor](points.ListWriter.md#querydocumentsfor)
- [removeDocument](points.ListWriter.md#removedocument)
- [fromSeed](points.ListWriter.md#fromseed)

## Constructors

### constructor

• **new ListWriter**\<`Content`\>(`params`): [`ListWriter`](points.ListWriter.md)\<`Content`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ListWriterParams`](../modules/points.md#listwriterparams) |

#### Returns

[`ListWriter`](points.ListWriter.md)\<`Content`\>

#### Overrides

[GenericReader](points.GenericReader.md).[constructor](points.GenericReader.md#constructor)

#### Defined in

[libraries/points/src/list-writer.ts:31](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/list-writer.ts#L31)

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

GenericReader.ceramic

#### Defined in

[libraries/points/src/generic-reader.ts:41](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L41)

___

### issuer

• `get` **issuer**(): `string`

#### Returns

`string`

#### Inherited from

GenericReader.issuer

#### Defined in

[libraries/points/src/generic-reader.ts:33](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L33)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

GenericReader.loader

#### Defined in

[libraries/points/src/generic-reader.ts:45](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L45)

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Inherited from

GenericReader.modelID

#### Defined in

[libraries/points/src/generic-reader.ts:37](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L37)

## Methods

### createDocument

▸ **createDocument**(`content`): `Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Content` |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Defined in

[libraries/points/src/list-writer.ts:36](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/list-writer.ts#L36)

___

### queryDocuments

▸ **queryDocuments**(`options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Inherited from

[GenericReader](points.GenericReader.md).[queryDocuments](points.GenericReader.md#querydocuments)

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

#### Inherited from

[GenericReader](points.GenericReader.md).[queryDocumentsFor](points.GenericReader.md#querydocumentsfor)

#### Defined in

[libraries/points/src/generic-reader.ts:53](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L53)

___

### removeDocument

▸ **removeDocument**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[libraries/points/src/list-writer.ts:40](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/list-writer.ts#L40)

___

### fromSeed

▸ **fromSeed**\<`Content`\>(`params`): `Promise`\<[`ListWriter`](points.ListWriter.md)\<`Content`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ListWriterFromSeedParams`](../modules/points.md#listwriterfromseedparams) |

#### Returns

`Promise`\<[`ListWriter`](points.ListWriter.md)\<`Content`\>\>

#### Defined in

[libraries/points/src/list-writer.ts:24](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/list-writer.ts#L24)
