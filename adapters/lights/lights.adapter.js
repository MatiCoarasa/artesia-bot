import axios from "axios";

class LightsAdapter {

  constructor() {
    this.baseUrl = `https://${process.env.LIGHTS_BRIDGE_IP}`;
    this.username = process.env.LIGHTS_BRIDGE_USERNAME;
    this.clientKey = process.env.LIGHTS_BRIDGE_CLIENT_KEY;
  }

  async getDevices() {
    const response = await axios.get(`${this.baseUrl}/clip/v2/resource/device`, {
      headers: {
        'hue-application-key': process.env.LIGHTS_BRIDGE_USERNAME
      }
    });

    return response.data;
  }

  async setLightPower(lightId, power) {
    await axios.put(`${this.baseUrl}/clip/v2/resource/light/${lightId}`, JSON.stringify({ on: { on: power }}));
  }

  async setLightColor(lightId, { r, g, b }, saturation) {
    if (r > 255 || g > 255 || b > 255) throw new RangeError("Invalid light color");
    if (saturation < 0 || saturation > 100) throw new RangeError("Invalid saturation value");

    await axios.put(`${this.baseUrl}/.................`)
  }

}

