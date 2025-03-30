import { program } from "commander";
import {BOT_NAME, BOT_VERSION} from "../../main/constants.js";

import { devicesService } from "../../main/bootstrap.js";

function _throwCliInvalidInput(input) {
  console.error(`${input} is not a valid input`);
  process.exit(1);
}


export function setupCli() {
  program
    .version(BOT_VERSION)
    .description(`${BOT_NAME} CLI`)
    .name(BOT_NAME);

  program
    .command('tv-power')
    .description('Turn your TV on or off')
    .argument('<power>', `Power value. Can be 'on' or 'off'`)
    .action(async (power) => {
      power = power.toLowerCase();
      if (!['on', 'off'].includes(power)) _throwCliInvalidInput(power)
      await devicesService.setTvPower(power === 'on')
    });

  program.parse(process.argv);
}
