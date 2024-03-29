// Import statements using ES module syntax
import { fromString } from 'uint8arrays';
import { CeramicClient } from "@ceramicnetwork/http-client";
import { getAuthenticatedDID } from '../../utils/did/dist/index.js'
import { SinglePointReader, SinglePointWriter } from '../../libraries/points/dist/index.js';

// Environment variable for Ceramic URL (Ensure it's set in your environment)
const CERAMIC_URL = process.env.CERAMIC_URL;
const CERAMIC_PRIVATE_KEY = process.env.CERAMIC_PRIVATE_KEY;

const point_subject = process.argv[2];

// Main function wrapped in an immediately invoked function expression (IIFE) to handle async/await
(async () => {

  if (!point_subject) {
    console.error("Usage: node assign_point.mjs [subject_did]");
    process.exit(1);
  }

  if (! CERAMIC_PRIVATE_KEY || ! CERAMIC_URL) {
    console.error("You must set CERAMIC_URL and CERAMIC_PRIVATE_KEY in your environment");
    process.exit(1);
  }
  const key = fromString(CERAMIC_PRIVATE_KEY, "base16");

  const ceramic = new CeramicClient();
  ceramic.did = await getAuthenticatedDID(key);
  const writer = new SinglePointWriter({ ceramic })

  const ret = await writer.addPointTo(point_subject)
  console.log("Wrote point! " + ret);

  const reader = new SinglePointReader({ceramic: ceramic, issuer: ceramic.did.id})
  const total_points = await reader.countPointsFor(point_subject)
  console.log(`Added a point for ${point_subject} now they have ${total_points}`)
})();

