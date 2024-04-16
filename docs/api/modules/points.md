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

#### Defined in

[libraries/points/src/generic-reader.ts:10](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/generic-reader.ts#L10)

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

#### Defined in

[libraries/points/src/list-writer.ts:8](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/list-writer.ts#L8)

___

### ListWriterParams

Ƭ **ListWriterParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic` | `CeramicAPI` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |

#### Defined in

[libraries/points/src/list-writer.ts:15](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/list-writer.ts#L15)

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

#### Defined in

[libraries/points/src/points-reader.ts:28](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L28)

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

#### Defined in

[libraries/points/src/points-writer.ts:24](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L24)

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

#### Defined in

[libraries/points/src/points-writer.ts:32](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-writer.ts#L32)

___

### QueryDocumentsOptions

Ƭ **QueryDocumentsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | `string` \| ``null`` |
| `before?` | `string` \| ``null`` |
| `count?` | `number` |

#### Defined in

[libraries/points/src/types.ts:3](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/types.ts#L3)

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

#### Defined in

[libraries/points/src/types.ts:9](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/types.ts#L9)

___

### SetReaderParams

Ƭ **SetReaderParams**: [`GenericReaderParams`](points.md#genericreaderparams)

#### Defined in

[libraries/points/src/set-reader.ts:11](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-reader.ts#L11)

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

#### Defined in

[libraries/points/src/set-writer.ts:8](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L8)

___

### SetWriterParams

Ƭ **SetWriterParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic` | `CeramicAPI` |
| `loader?` | `DocumentLoader` |
| `modelID` | `string` |

#### Defined in

[libraries/points/src/set-writer.ts:15](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/set-writer.ts#L15)
