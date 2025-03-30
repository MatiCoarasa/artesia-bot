export class Light {

  constructor(id, name, room, lightsAdapter) {
    this.id = id;
    this.name = name;
    this.room = room;
    this.lightsAdapter = lightsAdapter;
  }

  async turnOn() {
    await this.lightsAdapter.turnOn(this.id);
  }

  async turnOff() {
    await this.lightsAdapter.turnOff(this.id);
  }

  // color: rgb color. Object containing {r, g, b} keys with numbers ranging from 0 to 255.
  // saturation: color saturation. Expressed as a percentage (0 to 100).
  async setColor(color, saturation) {
    await this.lightsAdapter.setColor(this.id, color, saturation);
  }

  toString() {
    return JSON.stringify(this, null, 2);
  }

  equals(other) {
    return other instanceof Light && other.id === this.id;
  }
}
