export class DevicesService {

  constructor(tvAdapter, lightsAdapter) {
    this.tvAdapter = tvAdapter;
    this.lightsAdapter = lightsAdapter;
  }

  async setTvPower(power) {
    await this.tvAdapter.setPower(power);
  }
}
