# Class: SinglePointWriter\<Content\>

[points](../modules/points.md).SinglePointWriter

## Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `SinglePointContent` = `SinglePointContent` |

## Hierarchy

- [`SinglePointReader`](points.SinglePointReader.md)\<`Content`\>

  ↳ **`SinglePointWriter`**

## Table of contents

### Constructors

- [constructor](points.SinglePointWriter.md#constructor)

### Accessors

- [ceramic](points.SinglePointWriter.md#ceramic)
- [loader](points.SinglePointWriter.md#loader)
- [modelID](points.SinglePointWriter.md#modelid)

### Methods

- [addPointTo](points.SinglePointWriter.md#addpointto)
- [countPointsFor](points.SinglePointWriter.md#countpointsfor)
- [countTotalPoints](points.SinglePointWriter.md#counttotalpoints)
- [queryPointDocumentsFor](points.SinglePointWriter.md#querypointdocumentsfor)
- [removePoint](points.SinglePointWriter.md#removepoint)
- [fromSeed](points.SinglePointWriter.md#fromseed)

## Constructors

### constructor

• **new SinglePointWriter**\<`Content`\>(`params`): [`SinglePointWriter`](points.SinglePointWriter.md)\<`Content`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `SinglePointContent` = `SinglePointContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SinglePointWriterParams`](../modules/points.md#singlepointwriterparams) |

#### Returns

[`SinglePointWriter`](points.SinglePointWriter.md)\<`Content`\>

#### Overrides

[SinglePointReader](points.SinglePointReader.md).[constructor](points.SinglePointReader.md#constructor)

#### Defined in

[libraries/points/src/single-writer.ts:33](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-writer.ts#L33)

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

SinglePointReader.ceramic

#### Defined in

[libraries/points/src/single-reader.ts:37](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-reader.ts#L37)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

SinglePointReader.loader

#### Defined in

[libraries/points/src/single-reader.ts:41](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-reader.ts#L41)

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Inherited from

SinglePointReader.modelID

#### Defined in

[libraries/points/src/single-reader.ts:45](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-reader.ts#L45)

## Methods

### addPointTo

▸ **addPointTo**(`did`, `content?`): `Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `content` | `Partial`\<`Content`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`Content`\>\>

#### Defined in

[libraries/points/src/single-writer.ts:40](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-writer.ts#L40)

___

### countPointsFor

▸ **countPointsFor**(`did`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`number`\>

#### Inherited from

[SinglePointReader](points.SinglePointReader.md).[countPointsFor](points.SinglePointReader.md#countpointsfor)

#### Defined in

[libraries/points/src/single-reader.ts:61](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-reader.ts#L61)

___

### countTotalPoints

▸ **countTotalPoints**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[SinglePointReader](points.SinglePointReader.md).[countTotalPoints](points.SinglePointReader.md#counttotalpoints)

#### Defined in

[libraries/points/src/single-reader.ts:49](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-reader.ts#L49)

___

### queryPointDocumentsFor

▸ **queryPointDocumentsFor**(`did`, `options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`Content`\>\>

#### Inherited from

[SinglePointReader](points.SinglePointReader.md).[queryPointDocumentsFor](points.SinglePointReader.md#querypointdocumentsfor)

#### Defined in

[libraries/points/src/single-reader.ts:53](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-reader.ts#L53)

___

### removePoint

▸ **removePoint**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[libraries/points/src/single-writer.ts:47](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-writer.ts#L47)

___

### fromSeed

▸ **fromSeed**\<`Content`\>(`params`): `Promise`\<[`SinglePointWriter`](points.SinglePointWriter.md)\<`Content`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `SinglePointContent` = `SinglePointContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SinglePointWriterFromSeedParams`](../modules/points.md#singlepointwriterfromseedparams) |

#### Returns

`Promise`\<[`SinglePointWriter`](points.SinglePointWriter.md)\<`Content`\>\>

#### Defined in

[libraries/points/src/single-writer.ts:24](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/single-writer.ts#L24)
