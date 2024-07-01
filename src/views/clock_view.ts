import { Clock } from '../models/clock';

export class ClockView {
  private timeDisplay: HTMLElement;
  private lightOn: boolean = false;

  constructor() {
    this.timeDisplay = document.getElementById('timeDisplay');
  }

  render(clock: Clock): void {
    this.updateTimeDisplay(clock.getCurrentTime());
  }

  updateTimeDisplay(time: Date): void {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    this.timeDisplay.textContent = timeString;
  }

  toggleLight(on: boolean, time: Date): void {
    this.lightOn = on;
    this.updateTimeDisplay(time);
    const rectangle = document.querySelector('.rectangle') as HTMLElement;
    if (this.lightOn) {
      rectangle.classList.add('light-on');
    } else {
      rectangle.classList.remove('light-on');
    }
  }
}
