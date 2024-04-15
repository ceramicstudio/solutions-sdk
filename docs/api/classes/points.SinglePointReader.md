# Class: SinglePointReader\<Content\>

[points](../modules/points.md).SinglePointReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `SinglePointContent` = `SinglePointContent` |

## Hierarchy

- **`SinglePointReader`**

  ↳ [`SinglePointWriter`](points.SinglePointWriter.md)

## Table of contents

### Constructors

- [constructor](points.SinglePointReader.md#constructor)

### Accessors

- [ceramic](points.SinglePointReader.md#ceramic)
- [loader](points.SinglePointReader.md#loader)
- [modelID](points.SinglePointReader.md#modelid)

### Methods

- [countPointsFor](points.SinglePointReader.md#countpointsfor)
- [countTotalPoints](points.SinglePointReader.md#counttotalpoints)
- [queryPointDocumentsFor](points.SinglePointReader.md#querypointdocumentsfor)

## Constructors

### constructor

• **new SinglePointReader**\<`Content`\>(`params`): [`SinglePointReader`](points.SinglePointReader.md)\<`Content`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Content` | extends `SinglePointContent` = `SinglePointContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SinglePointReaderParams`](../modules/points.md#singlepointreaderparams) |

#### Returns

[`SinglePointReader`](points.SinglePointReader.md)\<`Content`\>

#### Defined in

[libraries/points/src/single-reader.ts:27](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L27)

## Accessors

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Defined in

[libraries/points/src/single-reader.ts:37](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L37)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Defined in

[libraries/points/src/single-reader.ts:41](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L41)

___

### modelID

• `get` **modelID**(): `string`

#### Returns

`string`

#### Defined in

[libraries/points/src/single-reader.ts:45](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L45)

## Methods

### countPointsFor

▸ **countPointsFor**(`did`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[libraries/points/src/single-reader.ts:61](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L61)

___

### countTotalPoints

▸ **countTotalPoints**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[libraries/points/src/single-reader.ts:49](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L49)

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

#### Defined in

[libraries/points/src/single-reader.ts:53](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L53)
