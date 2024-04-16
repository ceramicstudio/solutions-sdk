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

#### Defined in

[libraries/points/src/generic-reader.ts:24](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L24)

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

### getPointsFor

▸ **getPointsFor**(`didOrValues`, `options?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `options?` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<`number`\>

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
