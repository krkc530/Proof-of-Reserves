class AssetStates {
  constructor(length) {
    this.states = Array(length).fill(true);
    this.length = length;
  }
  // state = { false, true };
  setAssetState(index, state) {
    if (typeof state !== "boolean") {
      throw new Error("Invalid state type");
    }
    if (index < 0 || index > this.length - 1) {
      throw new Error("Invalid index range");
    }
    this.states[index] = state;
  }
  getAssetState(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error("Invalid index range");
    }
    return this.states[index];
  }
  setAllAssetState(state) {
    if (typeof state !== "boolean") {
      throw new Error("Invalid state type");
    }
    for (var i = 0; i < this.length; i++) {
      this.states[i] = state;
    }
  }
}

// to cover 'all true', for 7 assets
const AssetStatesInstance = new AssetStates(8);

export default AssetStatesInstance;
