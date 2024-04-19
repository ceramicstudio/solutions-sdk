# Points library

A simple library to interact with points on Ceramic using ComposeDB, making it easy for developers to use out-of-the-box for straightforward use cases, or extend for more nuanced environments

## Installation

```sh
npm install @ceramic-solutions/points
```

## Overview

This library assumes that developers who desire to build point systems will most importantly want to:

1. Easily keep track of an aggregate total number of points an individual has, and
2. Have the option to observe why and when points were allocated to individuals 

As such, this library relies on two core interfaces that serve this purpose - the `PointsAggregationInterface` and `PointsAllocationInterface`.

### PointsAggregationInterface

```GraphQL
interface PointsInterface
  @createModel(description: "Interface for a generic points association to an account") {
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
}

interface PointsAggregationInterface implements PointsInterface
  @createModel(description: "Interface for an aggregation of points to an account") {
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
  date: DateTime!
}
```

As alluded to in use case #1 in the overview above, this interface is designed to keep track of the total sum of points a given user has. The library uses the following default type that implements this interface:

```GraphQL
type SimplePointsAggregation implements PointsAggregationInterface
  @createModel(
    description: "Simple points aggregation to an account at a specific date"
    accountRelation: SET
    accountRelationFields: ["recipient"]
  ) {
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
  date: DateTime!
}
```

In this type, the `SET` accountRelation restricts the number of model instance documents a given recipient can have to only 1. Unless explicitly indicated by the developer (explained below), this will be the default data model the library will use for all aggregation writes and reads.

The `PointsAggregationInterface` can optionally be extended by developers. To view an example, check out this [simple express server](https://github.com/ceramicstudio/solutions-sdk/tree/main/demo/server) demo.

### PointsAllocationInterface

```GraphQL
interface PointsInterface
  @createModel(description: "Interface for a generic points association to an account") {
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
}

interface PointsAllocationInterface implements PointsInterface
  @createModel(description: "Interface for a single allocation of points to an account") {
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
}
```

This interface can be used by developers to track each allocation event. Given that GraphQL does not support native aggregation calls across disparate documents, the library therefore represents the need for aggregation and allocation history into two separate models (hence the `PointsAllocationInterface`).

The following is the default type the library uses that implements this interface:

```GraphQL
type SimplePointsAllocation implements PointsAllocationInterface
  @createModel(description: "Simple points allocation to an account") {
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
}
```

Given that this type does not indicate a `SET` accountRelation, a recipient intentionally could receive many model instance documents of this type. The library also makes it easy for developers to use extensions of this interface in order to support more data-rich models. For example, this type could be extended to include a timestamp and reason:

```GraphQL
type RichPointsAllocation implements PointsAllocationInterface
  @createModel(description: "Simple points allocation to an account")
  @createIndex(fields: [{ path: ["date"] }])
  @createIndex(fields: [{ path: ["reason"] }])
{
  issuer: DID! @documentAccount
  recipient: DID! @accountReference
  points: Int!
  date: DateTime!
  reason: String! @string(maxLength: 100)
}
```

## Default Hosted Node (Testing Purposes Only)

The points library uses a default node endpoint (for test purposes only) that has the standard types and interfaces deployed onto it. Unless otherwise indicated by the developer, the library will use this hosted node.

For developers who want to use the library with bespoke type extensions of the standard interfaces, they will need to deploy the library's composite onto their own node, as well as the model extensions they wish to use.

Note: this hosted node is designed to make it easier for developers to quickly experiment with this library, but is NOT intended for production purposes. If you use this default node in production, your data may be lost.

## Usage

Instantiating a PointsWriter/PointsReader from seed:

```TypeScript
import { PointsReader, PointsWriter } from '@ceramic-solutions/points'
import { getAuthenticatedDID } from '@ceramic-solutions/key-did'
import { fromString } from 'uint8arrays'

// import environment variable
const CERAMIC_PRIVATE_KEY: string = process.env.CERAMIC_PRIVATE_KEY || ''

// transform private key to Uint8Array
const key = fromString(CERAMIC_PRIVATE_KEY, 'base16') as Uint8Array

// generate issuer for reader context
const issuer = await getAuthenticatedDID(key)

// instantiate a PointsWriter using default hosted node
const writer = await PointsWriter.fromSeed({
    seed: key
    // ceramic: <your node endpoint> (if using custom node)
  })

// instantiate a PointsReader and specify application as issuer
const reader = PointsReader.create({
    issuer: issuer.id,
    // ceramic: <your node endpoint> (if using custom node)
  })
```

Reading and writing to aggregation documents for a recipient:

```TypeScript

// recipient must be did:pkh format
const { amount, recipient } = req.body

// using default `SimplePointsAggregation` type
const doc = await reader.loadAggregationDocumentFor([recipient])
const totalPoints = doc.content.points

// create if does not exist
if (!doc) {
      await writer.setPointsAggregationFor([recipient], amount, {
        recipient,
        points: amount,
        date: new Date().toISOString()
      }) 
    } else {
      const updatedDoc = await writer.updatePointsAggregationFor(
        [recipient],
        (content) => {
          return {
            points: content ? content.points + amount : amount,
            date: new Date().toISOString(),
            recipient
          }
        },
      )
    }

// allocate points to track history
await writer.allocatePointsTo(recipient, amount, {
    recipient,
    points: amount,
    date: new Date().toISOString()
})
```

Note: developers who wish to use the allocation and aggregation functionality together must control for keeping the totals for each in sync within their application logic - this is not automatically accounted for in the library.

## Accessing the Library Composite

If you wish to bypass the library's core functions or use it in conjunction with the standard ComposeDB libraries, here is where you can find the corresponding [JavaScript composite runtime definition](https://github.com/ceramicstudio/solutions-sdk/blob/main/composites/points/src/definition.ts). 

Additionally, if you wish to use this library in production (and therefore need to deploy the library composite onto your own node), here is where you can find the canonical [JSON Composite](https://github.com/ceramicstudio/solutions-sdk/blob/main/composites/points/composite.json). 

For information on how to deploy composites, visit our [ComposeDB Composites](https://developers.ceramic.network/docs/composedb/guides/data-modeling/composites) page in our docs.

## License

Dual licensed under MIT and Apache 2
