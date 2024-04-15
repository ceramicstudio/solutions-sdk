# Module: points

## Table of contents

### Classes

- [PointsReader](../classes/points.PointsReader.md)
- [PointsWriter](../classes/points.PointsWriter.md)
- [SinglePointReader](../classes/points.SinglePointReader.md)
- [SinglePointWriter](../classes/points.SinglePointWriter.md)

### Type Aliases

- [PointsReaderParams](points.md#pointsreaderparams)
- [PointsWriterFromSeedParams](points.md#pointswriterfromseedparams)
- [PointsWriterParams](points.md#pointswriterparams)
- [QueryDocumentsOptions](points.md#querydocumentsoptions)
- [QueryDocumentsResult](points.md#querydocumentsresult)
- [SinglePointReaderParams](points.md#singlepointreaderparams)
- [SinglePointWriterFromSeedParams](points.md#singlepointwriterfromseedparams)
- [SinglePointWriterParams](points.md#singlepointwriterparams)

## Type Aliases

### PointsReaderParams

Ƭ **PointsReaderParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregationModelID?` | `string` |
| `allocationModelID?` | `string` |
| `ceramic?` | `CeramicAPI` \| `string` |
| `issuer` | `string` |
| `loader?` | `DocumentLoader` |

#### Defined in

[libraries/points/src/points-reader.ts:25](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/points-reader.ts#L25)

___

### PointsWriterFromSeedParams

Ƭ **PointsWriterFromSeedParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic?` | `CeramicAPI` \| `string` |
| `loader?` | `DocumentLoader` |
| `modelID?` | `string` |
| `seed` | `Uint8Array` |

#### Defined in

[libraries/points/src/points-writer.ts:13](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/points-writer.ts#L13)

___

### PointsWriterParams

Ƭ **PointsWriterParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregationModelID?` | `string` |
| `allocationModelID?` | `string` |
| `ceramic` | `CeramicAPI` |
| `loader?` | `DocumentLoader` |

#### Defined in

[libraries/points/src/points-writer.ts:20](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/points-writer.ts#L20)

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

[libraries/points/src/types.ts:3](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/types.ts#L3)

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

[libraries/points/src/types.ts:9](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/types.ts#L9)

___

### SinglePointReaderParams

Ƭ **SinglePointReaderParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic?` | `CeramicAPI` \| `string` |
| `issuer` | `string` |
| `loader?` | `DocumentLoader` |
| `modelID?` | `string` |

#### Defined in

[libraries/points/src/single-reader.ts:14](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-reader.ts#L14)

___

### SinglePointWriterFromSeedParams

Ƭ **SinglePointWriterFromSeedParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic?` | `CeramicAPI` \| `string` |
| `loader?` | `DocumentLoader` |
| `modelID?` | `string` |
| `seed` | `Uint8Array` |

#### Defined in

[libraries/points/src/single-writer.ts:8](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-writer.ts#L8)

___

### SinglePointWriterParams

Ƭ **SinglePointWriterParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ceramic` | `CeramicAPI` |
| `loader?` | `DocumentLoader` |
| `modelID?` | `string` |

#### Defined in

[libraries/points/src/single-writer.ts:15](https://github.com/ceramicstudio/solutions-sdk/blob/996989c557810301e582e300ab7215628488db96/libraries/points/src/single-writer.ts#L15)
