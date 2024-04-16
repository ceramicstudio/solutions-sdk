# Class: PointsReader\<AggregationContent, AllocationContent\>

[points](../modules/points.md).PointsReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `AllocatePointsContent` = `AllocatePointsContent` |

## Hierarchy

- **`PointsReader`**

  ↳ [`PointsWriter`](points.PointsWriter.md)

## Table of contents

### Constructors

- [constructor](points.PointsReader.md#constructor)

### Methods

- [getAggregationPointsFor](points.PointsReader.md#getaggregationpointsfor)
- [loadAggregationDocumentFor](points.PointsReader.md#loadaggregationdocumentfor)
- [loadAggregationDocumentsFor](points.PointsReader.md#loadaggregationdocumentsfor)
- [queryAggregationDocuments](points.PointsReader.md#queryaggregationdocuments)
- [queryAllocationDocumentsFor](points.PointsReader.md#queryallocationdocumentsfor)
- [create](points.PointsReader.md#create)

## Constructors

### constructor

• **new PointsReader**\<`AggregationContent`, `AllocationContent`\>(`params`): [`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `PointsContent` = `PointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointsReaderParams`](../modules/points.md#pointsreaderparams)\<`AggregationContent`, `AllocationContent`\> |

#### Returns

[`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

#### Defined in

[libraries/points/src/points-reader.ts:63](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L63)

## Methods

### getAggregationPointsFor

▸ **getAggregationPointsFor**(`didOrValues`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didOrValues` | `string` \| `string`[] |

#### Returns

`Promise`\<`number`\>

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

#### Defined in

[libraries/points/src/points-reader.ts:92](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L92)

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

#### Defined in

[libraries/points/src/points-reader.ts:40](https://github.com/ceramicstudio/solutions-sdk/blob/410a332e8e4d42d225b25ac7932f63038da217ad/libraries/points/src/points-reader.ts#L40)
