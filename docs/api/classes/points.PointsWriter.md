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

___

### removePointsAllocation

▸ **removePointsAllocation**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

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
