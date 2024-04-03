# Class: PointsReader\<AggregationContent, AllocationContent\>

[points](../modules/points.md).PointsReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `MultiplePointsContent` = `MultiplePointsContent` |

## Hierarchy

- **`PointsReader`**

  ↳ [`PointsWriter`](points.PointsWriter.md)

## Table of contents

### Constructors

- [constructor](points.PointsReader.md#constructor)

### Accessors

- [aggregationModelID](points.PointsReader.md#aggregationmodelid)
- [allocationModelID](points.PointsReader.md#allocationmodelid)
- [ceramic](points.PointsReader.md#ceramic)
- [loader](points.PointsReader.md#loader)

### Methods

- [getAggregationPointsFor](points.PointsReader.md#getaggregationpointsfor)
- [loadAggregationDocumentFor](points.PointsReader.md#loadaggregationdocumentfor)
- [queryAggregationDocuments](points.PointsReader.md#queryaggregationdocuments)
- [queryAllocationDocumentsFor](points.PointsReader.md#queryallocationdocumentsfor)

## Constructors

### constructor

• **new PointsReader**\<`AggregationContent`, `AllocationContent`\>(`params`): [`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AggregationContent` | extends `TotalPointsContent` = `TotalPointsContent` |
| `AllocationContent` | extends `MultiplePointsContent` = `MultiplePointsContent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointsReaderParams`](../modules/points.md#pointsreaderparams) |

#### Returns

[`PointsReader`](points.PointsReader.md)\<`AggregationContent`, `AllocationContent`\>

#### Defined in

[libraries/points/src/points-reader.ts:41](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L41)

## Accessors

### aggregationModelID

• `get` **aggregationModelID**(): `string`

#### Returns

`string`

#### Defined in

[libraries/points/src/points-reader.ts:55](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L55)

___

### allocationModelID

• `get` **allocationModelID**(): `string`

#### Returns

`string`

#### Defined in

[libraries/points/src/points-reader.ts:59](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L59)

___

### ceramic

• `get` **ceramic**(): `CeramicAPI`

#### Returns

`CeramicAPI`

#### Defined in

[libraries/points/src/points-reader.ts:63](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L63)

___

### loader

• `get` **loader**(): `DocumentLoader`

#### Returns

`DocumentLoader`

#### Defined in

[libraries/points/src/points-reader.ts:67](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L67)

## Methods

### getAggregationPointsFor

▸ **getAggregationPointsFor**(`did`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`number`\>

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

#### Defined in

[libraries/points/src/points-reader.ts:92](https://github.com/ceramicstudio/solutions/blob/a751967/libraries/points/src/points-reader.ts#L92)
