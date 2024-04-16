# Class: SetWriter\<Content\>

[points](../modules/points.md).SetWriter

## Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

## Hierarchy

- [`SetReader`](points.SetReader.md)\<`Content`\>

  ↳ **`SetWriter`**

## Table of contents

### Constructors

- [constructor](points.SetWriter.md#constructor)

### Accessors

- [ceramic](points.SetWriter.md#ceramic)
- [issuer](points.SetWriter.md#issuer)
- [loader](points.SetWriter.md#loader)
- [modelID](points.SetWriter.md#modelid)

### Methods

- [getPointsFor](points.SetWriter.md#getpointsfor)
- [loadDocumentFor](points.SetWriter.md#loaddocumentfor)
- [queryDocuments](points.SetWriter.md#querydocuments)
- [queryDocumentsFor](points.SetWriter.md#querydocumentsfor)
- [removeDocument](points.SetWriter.md#removedocument)
- [removeDocumentFor](points.SetWriter.md#removedocumentfor)
- [setDocumentFor](points.SetWriter.md#setdocumentfor)
- [fromSeed](points.SetWriter.md#fromseed)

## Constructors

### constructor

• **new SetWriter**\<`Content`\>(`params`): [`SetWriter`](points.SetWriter.md)\<`Content`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SetWriterParams`](../modules/points.md#setwriterparams) |

#### Returns

[`SetWriter`](points.SetWriter.md)\<`Content`\>

#### Overrides

[SetReader](points.SetReader.md).[constructor](points.SetReader.md#constructor)

#### Defined in

[libraries/points/src/set-writer.ts:29](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L29)

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

SetReader.ceramic

#### Defined in

[libraries/points/src/generic-reader.ts:41](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L41)

___

### issuer

• `get` **issuer**(): `string`

#### Returns

`string`

#### Inherited from

SetReader.issuer

#### Defined in

[libraries/points/src/generic-reader.ts:33](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L33)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

SetReader.loader

#### Defined in

[libraries/points/src/generic-reader.ts:45](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L45)

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Inherited from

SetReader.modelID

#### Defined in

[libraries/points/src/generic-reader.ts:37](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L37)

## Methods

### getPointsFor

▸ **getPointsFor**(`didOrValues`, `options?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `options?` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<`number`\>

#### Inherited from

[SetReader](points.SetReader.md).[getPointsFor](points.SetReader.md#getpointsfor)

#### Defined in

[libraries/points/src/set-reader.ts:26](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-reader.ts#L26)

___

### loadDocumentFor

▸ **loadDocumentFor**(`didOrValues`, `options?`): `Promise`\<``null`` \| `ModelInstanceDocument`\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `options` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<``null`` \| `ModelInstanceDocument`\<`Content`\>\>

#### Inherited from

[SetReader](points.SetReader.md).[loadDocumentFor](points.SetReader.md#loaddocumentfor)

#### Defined in

[libraries/points/src/set-reader.ts:16](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-reader.ts#L16)

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

[SetReader](points.SetReader.md).[queryDocuments](points.SetReader.md#querydocuments)

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

[SetReader](points.SetReader.md).[queryDocumentsFor](points.SetReader.md#querydocumentsfor)

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

[libraries/points/src/set-writer.ts:57](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L57)

___

### removeDocumentFor

▸ **removeDocumentFor**(`didOrValues`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[libraries/points/src/set-writer.ts:65](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L65)

___

### setDocumentFor

▸ **setDocumentFor**(`didOrValues`, `updateContent`): `Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `updateContent` | (`content`: ``null`` \| `Content`) => `Partial`\<`Content`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Defined in

[libraries/points/src/set-writer.ts:41](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L41)

___

### fromSeed

▸ **fromSeed**\<`Content`\>(`params`): `Promise`\<[`SetWriter`](points.SetWriter.md)\<`Content`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SetWriterFromSeedParams`](../modules/points.md#setwriterfromseedparams) |

#### Returns

`Promise`\<[`SetWriter`](points.SetWriter.md)\<`Content`\>\>

#### Defined in

[libraries/points/src/set-writer.ts:22](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L22)
