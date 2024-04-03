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
- [queryAggregationDocuments](points.PointsWriter.md#queryaggregationdocuments)
- [queryAllocationDocumentsFor](points.PointsWriter.md#queryallocationdocumentsfor)
- [removePointsAllocation](points.PointsWriter.md#removepointsallocation)
- [setPointsAggregationFor](points.PointsWriter.md#setpointsaggregationfor)
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

[libraries/points/src/points-writer.ts:42](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-writer.ts#L42)

## Accessors

### aggregationModelID

• `get` **aggregationModelID**(): `string`

#### Returns

`string`

#### Inherited from

PointsReader.aggregationModelID

#### Defined in

[libraries/points/src/points-reader.ts:55](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L55)

___

### allocationModelID

• `get` **allocationModelID**(): `string`

#### Returns

`string`

#### Inherited from

PointsReader.allocationModelID

#### Defined in

[libraries/points/src/points-reader.ts:59](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L59)

___

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Inherited from

PointsReader.ceramic

#### Defined in

[libraries/points/src/points-reader.ts:63](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L63)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Inherited from

PointsReader.loader

#### Defined in

[libraries/points/src/points-reader.ts:67](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L67)

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

[libraries/points/src/points-writer.ts:49](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-writer.ts#L49)

___

### getAggregationPointsFor

▸ **getAggregationPointsFor**(`did`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`number`\>

#### Inherited from

[PointsReader](points.PointsReader.md).[getAggregationPointsFor](points.PointsReader.md#getaggregationpointsfor)

#### Defined in

[libraries/points/src/points-reader.ts:81](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L81)

___

### loadAggregationDocumentFor

▸ **loadAggregationDocumentFor**(`did`, `options?`): `Promise`\<``null`` \| `ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `options` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<``null`` \| `ModelInstanceDocument`\<`AggregationContent`\>\>

#### Inherited from

[PointsReader](points.PointsReader.md).[loadAggregationDocumentFor](points.PointsReader.md#loadaggregationdocumentfor)

#### Defined in

[libraries/points/src/points-reader.ts:71](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L71)

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

[libraries/points/src/points-reader.ts:86](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L86)

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

[libraries/points/src/points-reader.ts:92](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L92)

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

[libraries/points/src/points-writer.ts:61](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-writer.ts#L61)

___

### setPointsAggregationFor

▸ **setPointsAggregationFor**(`did`, `points`, `content?`): `Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `points` | `number` |
| `content` | `Partial`\<`AggregationContent`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:69](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-writer.ts#L69)

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

[libraries/points/src/points-writer.ts:30](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-writer.ts#L30)
