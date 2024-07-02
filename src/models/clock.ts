export enum Mode {
  DISPLAY,
  EDIT_HOUR,
  EDIT_MINUTE,
}

export class Clock {
  private currentTime: Date;
  private mode: Mode;
  private timezoneOffset: number;

  constructor(timezoneOffset: number = 0) {
    this.currentTime = new Date();
    this.mode = Mode.DISPLAY;
    this.timezoneOffset = timezoneOffset;
  }

  getCurrentTime(): Date {
    const localTime = new Date(this.currentTime);
    localTime.setHours(localTime.getHours() + this.timezoneOffset);
    return localTime;
  }

  incrementHour(): void {
    this.currentTime.setHours(this.currentTime.getHours() + 1);
  }

  incrementMinute(): void {
    this.currentTime.setMinutes(this.currentTime.getMinutes() + 1);
  }

  getMode(): Mode {
    return this.mode;
  }

  setMode(mode: Mode): void {
    this.mode = mode;
  }

  tick(): void {
    this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
  }

  reset(): void {
    this.currentTime = new Date();
  }
}
