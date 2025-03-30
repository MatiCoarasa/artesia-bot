import 'dotenv/config';

import { Inputs, LGTV } from 'lgtv-ip-control';

let currentApp;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

lgtv
  .powerOnAndConnect()
  .then(async () => {
      console.log("Tele prendida")
      currentApp = await lgtv.getCurrentApp();
      console.log(`La app actual es ${currentApp}`)
      console.log("Iniciando neflix")
      await lgtv.launchApp("netflix")
      await sleep(1000)
      currentApp = await lgtv.getCurrentApp();
      console.log(`La app actual es ${currentApp}`)
  })
  // Log any errors
  .catch(console.error)
  // Tries disconnecting once done
  .finally(() => lgtv.disconnect());
