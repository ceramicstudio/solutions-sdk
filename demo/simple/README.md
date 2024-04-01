# Demonstration of publishing points from command line

See `index.mjs` for the minimum required to publish points

## Install prerequisites
`npm install`

## Publish points

1) configure your environment for your preferred ceramic node

(we may in the future have a ephemeral node available)
```
export CERAMIC_URL=
export CERAMIC_PRIVATE_KEY=
```

1.1) If you have not done so already, ensure the points composite is deployed to your node

`composedb composite:deploy ../../composites/points/composite.json --ceramic-url=$CERAMIC_URL --did-private-key=$CERAMIC_PRIVATE_KEY`


2) run the demo

`node index.mjs [SOME_DID]`

Note the did receiving points does not have to exist anywhere, only be a valid did string, such as `did:key:123`

3) to examine the streams created

`http://localhost:7007/api/v0/streams/[streamid from console]`
