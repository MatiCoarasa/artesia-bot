import { DevicesService } from "../services/devices.service.js";
import { TVAdapterFactory } from "../adapters/tv/tv.factory.js";

const tvAdapter = await TVAdapterFactory.createAdapter(process.env.TV_PROVIDER);
// const lightsAdapter = LightsAdapterFactory.createAdapter(process.env.LIGHTS_PROVIDER);
const lightsAdapter = null;

export const devicesService = new DevicesService(tvAdapter, lightsAdapter);
