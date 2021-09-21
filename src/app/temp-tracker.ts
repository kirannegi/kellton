export class TempTracker {
  minTemp;
  maxTemp;
  meanTemp;
  modeTemp;
  sum = 0;
  count = 0;

  constructor() {}
  insert(temp) {
    this.minTemp = Math.min(temp, this.get_min);
    this.maxTemp = Math.max(temp, this.maxTemp);
    this.sum += temp;
    this.count++;
  }

  get get_min() {
    return this.minTemp;
  }

  get get_max() {
    return this.maxTemp;
  }

  get get_mean() {
    return ((this.sum * 100) / this.count) / 100;
  }

  get_mode() {}
}
