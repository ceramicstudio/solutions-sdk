# Class: PointsWriter\<AggregationContent, AllocationContent\>

[points](../modules/points.md).PointsWriter

## Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `AllocatePointsContent` = `AllocatePointsContent` |

## Hierarchy

- [`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

  ↳ **`PointsWriter`**

## Table of contents

### Constructors

- [constructor](points.PointsWriter.md#constructor)

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
- [create](points.PointsWriter.md#create)
- [fromAuthenticated](points.PointsWriter.md#fromauthenticated)
- [fromSeed](points.PointsWriter.md#fromseed)

## Constructors

### constructor

• **new PointsWriter**\<`AggregationContent`, `AllocationContent`\>(`params`): [`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointsWriterParams`](../modules/points.md#pointswriterparams)\<`AggregationContent`, `AllocationContent`\> |

#### Returns

[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>

#### Overrides

[PointsReader](points.PointsReader.md).[constructor](points.PointsReader.md#constructor)

#### Defined in

[libraries/points/src/points-writer.ts:78](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L78)

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

[libraries/points/src/points-writer.ts:87](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L87)

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

[libraries/points/src/points-reader.ts:82](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L82)

___

### loadAggregationDocumentFor

▸ **loadAggregationDocumentFor**(`didOrValues`, `options?`): `Promise`\<``null`` \| `ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `options?` | `DeterministicLoadOptions` |

#### Returns

`Promise`\<``null`` \| `ModelInstanceDocument`\<`AggregationContent`\>\>

#### Inherited from

[PointsReader](points.PointsReader.md).[loadAggregationDocumentFor](points.PointsReader.md#loadaggregationdocumentfor)

#### Defined in

[libraries/points/src/points-reader.ts:68](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L68)

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

[libraries/points/src/points-reader.ts:75](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L75)

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

[libraries/points/src/points-reader.ts:86](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L86)

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

[libraries/points/src/points-reader.ts:92](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L92)

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

[libraries/points/src/points-writer.ts:99](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L99)

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

[libraries/points/src/points-writer.ts:110](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L110)

___

### updatePointsAggregationFor

▸ **updatePointsAggregationFor**(`didOrValues`, `updateContent`): `Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |
| `updateContent` | (`content`: ``null`` \| `AggregationContent`) => `Partial`\<`AggregationContent`\> |

#### Returns

`Promise`\<`ModelInstanceDocument`\<`AggregationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:103](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L103)

___

### create

▸ **create**\<`AggregationContent`, `AllocationContent`\>(`params`): [`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `CreatePointsReaderParams` |

#### Returns

[`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

#### Inherited from

[PointsReader](points.PointsReader.md).[create](points.PointsReader.md#create)

#### Defined in

[libraries/points/src/points-reader.ts:40](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L40)

___

### fromAuthenticated

▸ **fromAuthenticated**\<`AggregationContent`, `AllocationContent`\>(`params`): [`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `PointsWriterFromAuthenticatedParams` |

#### Returns

[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>

#### Defined in

[libraries/points/src/points-writer.ts:44](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L44)

___

### fromSeed

▸ **fromSeed**\<`AggregationContent`, `AllocationContent`\>(`params`): `Promise`\<[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointsWriterFromSeedParams`](../modules/points.md#pointswriterfromseedparams) |

#### Returns

`Promise`\<[`PointsWriter`](points.PointsWriter.md)\<`AggregationContent`, `AllocationContent`\>\>

#### Defined in

[libraries/points/src/points-writer.ts:64](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L64)
