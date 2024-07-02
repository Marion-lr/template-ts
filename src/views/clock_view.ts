import { Clock } from '../models/clock';

export class ClockView {
  private timeDisplay: HTMLElement;
  private lightOn: boolean = false;
  private parentElement: HTMLElement;
  private is24HourFormat: boolean = true;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.timeDisplay = parentElement.querySelector('.timeDisplay')!;
  }

  render(clock: Clock): void {
    this.updateTimeDisplay(clock.getCurrentTime());
  }

  updateTimeDisplay(time: Date): void {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    let timeString: string;

    if (this.is24HourFormat) {
      timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    } else {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    }

    this.timeDisplay.textContent = timeString;
  }

  toggleLight(on: boolean, time: Date): void {
    this.lightOn = on;
    this.updateTimeDisplay(time);
    const rectangle = this.parentElement.querySelector('.rectangle') as HTMLElement;
    if (this.lightOn) {
      rectangle.classList.add('light-on');
    } else {
      rectangle.classList.remove('light-on');
    }
  }

  addEventListenerToButton(buttonClass: string, eventType: string, listener: EventListenerOrEventListenerObject): void {
    const button = this.parentElement.querySelector(buttonClass) as HTMLElement;
    button.addEventListener(eventType, listener);
  }

  toggleFormat(): void {
    this.is24HourFormat = !this.is24HourFormat;
  }
}
