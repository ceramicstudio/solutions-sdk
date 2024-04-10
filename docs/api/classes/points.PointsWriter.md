# Class: PointsWriter\<AggregationContent, AllocationContent\>

[points](../modules/points.md).PointsWriter

## Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `MultiplePointsContent` = `MultiplePointsContent` |

## Hierarchy

- [`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

  ↳ **`PointsWriter`**

## Table of contents

### Constructors

- [constructor](points.PointsWriter.md#constructor)

### Accessors

- [aggregationModelID](points.PointsWriter.md#aggregationmodelid)
- [allocationModelID](points.PointsWriter.md#allocationmodelid)
- [ceramic](points.PointsWriter.md#ceramic)
- [loader](points.PointsWriter.md#loader)

### Methods

- [allocatePointsTo](points.PointsWriter.md#allocatepointsto)
- [getAggregationPointsFor](points.PointsWriter.md#getaggregationpointsfor)
- [loadAggregationDocumentFor](points.PointsWriter.md#loadaggregationdocumentfor)
- [loadAggregationDocumentsFor](points.PointsWriter.md#loadaggregationdocumentsfor)
- [queryAggregationDocuments](points.PointsWriter.md#queryaggregationdocuments)
- [queryAllocationDocumentsFor](points.PointsWriter.md#queryallocationdocumentsfor)
- [removePointsAllocation](points.PointsWriter.md#removepointsallocation)
- [setPointsAggregationFor](points.PointsWriter.md#setpointsaggregationfor)
- [updatePointsAggregationFor](points.PointsWriter.md#updatepointsaggregationfor)
- [fromSeed](points.PointsWriter.md#fromseed)

## Constructors

### constructor

• **new PointsWriter**\<`AggregationContent`, `AllocationContent`\>(`params`): [`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `MultiplePointsContent` = `MultiplePointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointsWriterParams`](../modules/points.md#pointswriterparams) |

#### Returns

[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>

#### Overrides

[PointsReader](points.PointsReader.md).[constructor](points.PointsReader.md#constructor)

#### Defined in

[libraries/points/src/points-writer.ts:43](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-writer.ts#L43)

## Accessors

### aggregationModelID

• `get` **aggregationModelID**(): `string`

#### Returns

`string`

#### Inherited from

PointsReader.aggregationModelID

#### Defined in

[libraries/points/src/points-reader.ts:59](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L59)

___

### allocationModelID

• `get` **allocationModelID**(): `string`

#### Returns

`string`

#### Inherited from

PointsReader.allocationModelID

#### Defined in

[libraries/points/src/points-reader.ts:63](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L63)

___

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

PointsReader.ceramic

#### Defined in

[libraries/points/src/points-reader.ts:67](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L67)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

PointsReader.loader

#### Defined in

[libraries/points/src/points-reader.ts:71](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L71)

## Methods

### allocatePointsTo

▸ **allocatePointsTo**(`did`, `points`, `content?`): `Promise`\<`ModelInstanceDocument`\<`AllocationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `points` | `number` |
| `content` | `Partial`\<`AllocationContent`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`AllocationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:50](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-writer.ts#L50)

___

### getAggregationPointsFor

▸ **getAggregationPointsFor**(`didOrValues`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |

#### Returns

`Promise`\<`number`\>

#### Inherited from

[PointsReader](points.PointsReader.md).[getAggregationPointsFor](points.PointsReader.md#getaggregationpointsfor)

#### Defined in

[libraries/points/src/points-reader.ts:95](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L95)

___

### loadAggregationDocumentFor

▸ **loadAggregationDocumentFor**(`didOrValues`, `options?`): `Promise`\<``null`` \| `ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `options` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<``null`` \| `ModelInstanceDocument`\<`AggregationContent`\>\>

#### Inherited from

[PointsReader](points.PointsReader.md).[loadAggregationDocumentFor](points.PointsReader.md#loadaggregationdocumentfor)

#### Defined in

[libraries/points/src/points-reader.ts:75](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L75)

___

### loadAggregationDocumentsFor

▸ **loadAggregationDocumentsFor**(`did`, `options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`AggregationContent`\>\>

#### Inherited from

[PointsReader](points.PointsReader.md).[loadAggregationDocumentsFor](points.PointsReader.md#loadaggregationdocumentsfor)

#### Defined in

[libraries/points/src/points-reader.ts:87](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L87)

___

### queryAggregationDocuments

▸ **queryAggregationDocuments**(`options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`AggregationContent`\>\>

#### Inherited from

[PointsReader](points.PointsReader.md).[queryAggregationDocuments](points.PointsReader.md#queryaggregationdocuments)

#### Defined in

[libraries/points/src/points-reader.ts:100](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L100)

___

### queryAllocationDocumentsFor

▸ **queryAllocationDocumentsFor**(`did`, `options?`): `Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`AllocationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `options?` | [`QueryDocumentsOptions`](../modules/points.md#querydocumentsoptions) |

#### Returns

`Promise`\<[`QueryDocumentsResult`](../modules/points.md#querydocumentsresult)\<`AllocationContent`\>\>

#### Inherited from

[PointsReader](points.PointsReader.md).[queryAllocationDocumentsFor](points.PointsReader.md#queryallocationdocumentsfor)

#### Defined in

[libraries/points/src/points-reader.ts:106](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-reader.ts#L106)

___

### removePointsAllocation

▸ **removePointsAllocation**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[libraries/points/src/points-writer.ts:62](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-writer.ts#L62)

___

### setPointsAggregationFor

▸ **setPointsAggregationFor**(`didOrValues`, `points`, `content?`): `Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `points` | `number` |
| `content` | `Partial`\<`AggregationContent`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:89](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-writer.ts#L89)

___

### updatePointsAggregationFor

▸ **updatePointsAggregationFor**(`didOrValues`, `update`): `Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `update` | (`content`: ``null`` \| `AggregationContent`) => `Partial`\<`AggregationContent`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:70](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-writer.ts#L70)

___

### fromSeed

▸ **fromSeed**\<`AggregationContent`, `AllocationContent`\>(`params`): `Promise`\<[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `MultiplePointsContent` = `MultiplePointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointsWriterFromSeedParams`](../modules/points.md#pointswriterfromseedparams) |

#### Returns

`Promise`\<[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:31](https://github.com/ceramicstudio/solutions/blob/63cb3ad5f3da236446973238558e1895a955200e/libraries/points/src/points-writer.ts#L31)
