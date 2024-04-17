# Express Server Demo

This directory contains an example server (using Express) that displays how the points library can be consumed given a particular use case. This example also shows how consumers of the points library can optionally extend the interfaces to fit their unique needs.

## Model Extension

If you take a look into the [sandboxAggregation](./composites/sandboxAggregation.graphql) file, you'll notice that we've extended the `PointsAggregationInterface` interface to implement a new type - `SandboxPointAggregation`. 

This new type extends the original interface to include a "context" field in its SET accountRelation, meaning that instead of 1 model instance per recipient per model, there can be 1 model instance per recipient given a certain context.

The use case for this type is rewarding points within a developer sandbox. Imagine that we might want to reward participants across three categories of developer sandbox actions:

1. Simple read query - yields 1 point per action (context: "read")
2. Simple mutation - yields 5 points per action (context: "write")
3. Complex mutation - yields 10 points per action (context: "complexWrite")

In this case, we can make use of our new type to keep track of the aggregations at the context level, while still making use of the default `SimplePointsAggregation` that the library implements: [library composites](../../composites/points/schemas/1-init.graphql).

## Process

In order to use an extended type (like this server example uses), the following must have happened prior to running the server:

1. A ComposeDB node would have been stood up with the [default library composite](../../composites/points/composite.json) deployed onto the node
2. Next, the developer would deploy the [SandboxPointAggregation](./composites/sandboxAggregation.graphql) type (which imports one of the default library interfaces already deployed above in step 1)
3. An .env file would have been generated at the root of this directory using the same format as [.env.example](./.env.example), using your endpoint in place of `CERAMIC_URL`, the corresponding StreamID for your `SandboxPointAggregation` model you just deployed in place of `AGGREGATION_ID`, and a private key

## MultiController and Routes

The /multi api route exposes two APIs:

`/aggregate`

- Takes in an amount (int), recipient (did:pkh string), and context (string) in the request body
- Automatically updates or creates (if it does not exist) the model instance for that recipient given the context
- Automatically updates or creates (if it does not exist) a "global total" model instance to keep track of the aggregate for that recipient across contexts
- Returns both the context total and the global total, in addition to their corresponding documents

`/getAggregations`

- Takes in recipient (did:pkh string) and context (string) in the request body
- Returns both the context total and the global total, in addition to their corresponding documents

## PointAllocations

You'll notice that this library does not currently make use of the `PointsAllocationInterface`. For other use cases, it may be important to have more granular visibility into the reason for each individual point distribution event, in which case this interface could also be extended to include a context (which could be used to describe why the points distribution occurred).

## Getting started

To get up and running and start experimenting with this server:

1. Install the monorepo dependencies from the root of the /solutions directory:

```bash
pnpm install
```

2. From within the /solutions/demo/server directory, create your .env file using the instructions from the "process" section above (as well as the node instructions)

3. Run the server in developer mode:

```bash
pnpm dev
```

**Note:** Your [index](./src/index.ts) file currently restricts calls to only ones originating from http://localhost:3000 - you can optionally remove or alter this if you wish to test calls from Postman or other similar tools.

## License

Dual licensed under MIT and Apache 2
