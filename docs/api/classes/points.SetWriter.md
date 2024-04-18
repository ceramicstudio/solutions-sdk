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

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

SetReader.ceramic

___

### issuer

• `get` **issuer**(): `string`

#### Returns

`string`

#### Inherited from

SetReader.issuer

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

SetReader.loader

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Inherited from

SetReader.modelID

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

___

### removeDocument

▸ **removeDocument**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

___

### removeDocumentFor

▸ **removeDocumentFor**(`didOrValues`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

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
