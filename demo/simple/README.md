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

2) run the demo

`node index.mjs`

3) to examine the streams created

...
`http://localhost:7007/api/v0/streams/[streamid from db]`

4) to examine all the points created in aggregate

...
