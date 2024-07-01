export enum Mode {
    DISPLAY,
    EDIT_HOUR,
    EDIT_MINUTE,
  }
  
  export class Clock {
    private currentTime: Date;
    private mode: Mode;

    constructor() {
      this.currentTime = new Date();
      this.mode = Mode.DISPLAY;
    }
  
    getCurrentTime(): Date {
      return new Date(this.currentTime); // Return the current time
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
  }
  