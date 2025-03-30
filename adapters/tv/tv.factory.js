import {SamsungTvAdapter} from "./adapters/samsungtv.adapter.js";
import {LgTvAdapter} from "./adapters/lgtv.adapter.js";

export class TVAdapterFactory {
  static async createAdapter(brand) {
    console.log(`Received TV brand '${brand}'`)
    let adapter;
    switch (brand) {
      case 'samsung':
        adapter = new SamsungTvAdapter(
          process.env.TV_SAMSUNG_ST_URL,
          process.env.TV_SAMSUNG_PAT,
          process.env.TV_SAMSUNG_NAME
      );
        break;
      case 'lg':
        adapter = new LgTvAdapter(
          process.env.TV_LG_IP,
          process.env.TV_LG_MAC,
          process.env.TV_LG_CODE
        );
        break;
      default: throw new Error(`${brand} is not a valid TV brand`);
    }
    await adapter.initialize();
    return adapter;
  }
}
