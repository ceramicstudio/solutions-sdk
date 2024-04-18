# Class: SetReader\<Content\>

[points](../modules/points.md).SetReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

## Hierarchy

- [`GenericReader`](points.GenericReader.md)\<`Content`\>

  ↳ **`SetReader`**

  ↳↳ [`SetWriter`](points.SetWriter.md)

## Table of contents

### Constructors

- [constructor](points.SetReader.md#constructor)

### Accessors

- [ceramic](points.SetReader.md#ceramic)
- [issuer](points.SetReader.md#issuer)
- [loader](points.SetReader.md#loader)
- [modelID](points.SetReader.md#modelid)

### Methods

- [getPointsFor](points.SetReader.md#getpointsfor)
- [loadDocumentFor](points.SetReader.md#loaddocumentfor)
- [queryDocuments](points.SetReader.md#querydocuments)
- [queryDocumentsFor](points.SetReader.md#querydocumentsfor)

## Constructors

### constructor

• **new SetReader**\<`Content`\>(`params`): [`SetReader`](points.SetReader.md)\<`Content`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GenericReaderParams`](../modules/points.md#genericreaderparams) |

#### Returns

[`SetReader`](points.SetReader.md)\<`Content`\>

#### Inherited from

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

### getPointsFor

▸ **getPointsFor**(`didOrValues`, `options?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `options?` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<`number`\>

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
