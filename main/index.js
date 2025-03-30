import 'dotenv/config';

import { setupCli } from "../transports/cli/setup.js";

const bootFunctions = [
  setupCli,
  // setupWebServer,
];

bootFunctions.forEach(bootFunction => bootFunction());
