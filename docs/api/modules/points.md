# Module: points

## Table of contents

### Classes

- [GenericReader](../classes/points.GenericReader.md)
- [ListWriter](../classes/points.ListWriter.md)
- [PointsReader](../classes/points.PointsReader.md)
- [PointsWriter](../classes/points.PointsWriter.md)
- [SetReader](../classes/points.SetReader.md)
- [SetWriter](../classes/points.SetWriter.md)

### Type Aliases

- [GenericReaderParams](points.md#genericreaderparams)
- [ListWriterFromSeedParams](points.md#listwriterfromseedparams)
- [ListWriterParams](points.md#listwriterparams)
- [PointsReaderParams](points.md#pointsreaderparams)
- [PointsWriterFromSeedParams](points.md#pointswriterfromseedparams)
- [PointsWriterParams](points.md#pointswriterparams)
- [QueryDocumentsOptions](points.md#querydocumentsoptions)
- [QueryDocumentsResult](points.md#querydocumentsresult)
- [SetReaderParams](points.md#setreaderparams)
- [SetWriterFromSeedParams](points.md#setwriterfromseedparams)
- [SetWriterParams](points.md#setwriterparams)

## Type Aliases

### GenericReaderParams

Ƭ **GenericReaderParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic?` | `CeramicAPI` \| `string` |
| `issuer` | `string` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |

___

### ListWriterFromSeedParams

Ƭ **ListWriterFromSeedParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic?` | `CeramicAPI` \| `string` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |
| `seed` | `Uint8Array` |

___

### ListWriterParams

Ƭ **ListWriterParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic` | `CeramicAPI` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |

___

### PointsReaderParams

Ƭ **PointsReaderParams**\<`AggregationContent`, `AllocationContent`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `AllocatePointsContent` = `AllocatePointsContent` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregationReader` | [`SetReader`](../classes/points.SetReader.md)\<`AggregationContent`\> |
| `allocationReader` | [`GenericReader`](../classes/points.GenericReader.md)\<`AllocationContent`\> |

___

### PointsWriterFromSeedParams

Ƭ **PointsWriterFromSeedParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregationModelID?` | `string` |
| `allocationModelID?` | `string` |
| `ceramic?` | `CeramicAPI` \| `string` |
| `loader?` | `DocumentLoader` |
| `seed` | `Uint8Array` |

___

### PointsWriterParams

Ƭ **PointsWriterParams**\<`AggregationContent`, `AllocationContent`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `AllocatePointsContent` = `AllocatePointsContent` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregationWriter` | [`SetWriter`](../classes/points.SetWriter.md)\<`AggregationContent`\> |
| `allocationWriter` | [`ListWriter`](../classes/points.ListWriter.md)\<`AllocationContent`\> |

___

### QueryDocumentsOptions

Ƭ **QueryDocumentsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | `string` \| ``null`` |
| `before?` | `string` \| ``null`` |
| `count?` | `number` |

___

### QueryDocumentsResult

Ƭ **QueryDocumentsResult**\<`Content`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `Content` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `documents` | `ModelInstanceDocument`\<`Content`\>[] |
| `endCursor` | `string` \| ``null`` |
| `hasNextPage` | `boolean` |
| `hasPreviousPage` | `boolean` |
| `startCursor` | `string` \| ``null`` |

___

### SetReaderParams

Ƭ **SetReaderParams**: [`GenericReaderParams`](points.md#genericreaderparams)

___

### SetWriterFromSeedParams

Ƭ **SetWriterFromSeedParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic?` | `CeramicAPI` \| `string` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |
| `seed` | `Uint8Array` |

___

### SetWriterParams

Ƭ **SetWriterParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic` | `CeramicAPI` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |
