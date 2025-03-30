import axios from "axios";
import {TvInterface} from "../tv.interface.js";

export class SamsungTvAdapter extends TvInterface {

  constructor(stUrl, stPat, deviceName) {
    super();
    this.httpClient = axios.create({
      baseURL: stUrl,
      timeout: 1000,
      headers: {'Authorization': `Bearer ${stPat}`}
    })
    this.httpClient.interceptors.response.use(
      r => r,
      error => {
        console.error(error.request.data);
        console.error(JSON.stringify(error.response?.data));
      }
    )
    this.deviceName = deviceName;
  }

  async initialize() {
    this.device = await this._findDevice(this.deviceName);
  }

  async _findDevice(deviceName) {
    const devicesResponse = await this.httpClient('/devices');
    const targetDevice = devicesResponse.data['items'].find(device => device.name === deviceName);
    if(!targetDevice) throw new Error(`Device ${deviceName} not found`);

    return targetDevice;
  }

  async setPower(power) {
    const url = `/devices/${this.device.deviceId}/commands`
    const requestBody = {
      commands: [
        {
          component: "main",
          capability: "switch",
          command: power ? "on" : "off",
        }
      ]
    }
    await this.httpClient.post(url, JSON.stringify(requestBody))
  }

  async setApp(appId) {

  }

  setVolume() {
    const requestBody = {
      commands: [
        {
          component: "main",
          capability: "audioVolume",
          command: "setVolume",
          arguments: [15]  // Volume level
        }
      ]
    }
  }
}