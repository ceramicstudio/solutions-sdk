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

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

GenericReader.ceramic

___

### issuer

• `get` **issuer**(): `string`

#### Returns

`string`

#### Inherited from

GenericReader.issuer

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

GenericReader.loader

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Inherited from

GenericReader.modelID

## Methods

### createDocument

▸ **createDocument**(`content`): `Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Content` |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`Content`\>\>

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
