function throwNotImplemented(method) {
  throw new Error(`Method ${method} not implemented`);
}

export class TvInterface {

  constructor() {
    if (this.constructor === TvInterface) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  async initialize() {
    throwNotImplemented('initialize');
  }

  // Power is a boolean
  async setPower(power) {
    throwNotImplemented('setPower');
  }

  async setApp() {
    throwNotImplemented('setApp');
  }

  async setVolume() {
    throwNotImplemented('setVolume');
  }
}