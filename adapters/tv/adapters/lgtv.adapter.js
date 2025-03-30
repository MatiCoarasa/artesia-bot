import { TvInterface } from "../tv.interface.js";
import { LGTV } from "lgtv-ip-control";

export class LgTvAdapter extends TvInterface {

  constructor(tvIp, tvMac, tvCode) {
    super();
    this.tv = new LGTV(tvIp, tvMac, tvCode);
  }

  async setPower(power) {

  }

  async setApp(appId) {

  }
}