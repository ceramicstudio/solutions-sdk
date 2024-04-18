# Module: experiments-client

## Table of contents

### Functions

- [assertAuthenticated](experiments_client.md#assertauthenticated)
- [getAuthenticatedClient](experiments_client.md#getauthenticatedclient)
- [getCeramicClient](experiments_client.md#getceramicclient)

## Functions

### assertAuthenticated

▸ **assertAuthenticated**(`did?`): asserts did

#### Parameters

| Name | Type |
| :------ | :------ |
| `did?` | `DID` |

#### Returns

asserts did

___

### getAuthenticatedClient

▸ **getAuthenticatedClient**(`seed`, `ceramicClientOrURL?`): `Promise`\<`CeramicAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `Uint8Array` |
| `ceramicClientOrURL?` | `string` \| `CeramicAPI` |

#### Returns

`Promise`\<`CeramicAPI`\>

___

### getCeramicClient

▸ **getCeramicClient**(`ceramic?`): `CeramicAPI`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ceramic` | `string` \| `CeramicAPI` | `DEFAULT_CERAMIC_URL` |

#### Returns

`CeramicAPI`
