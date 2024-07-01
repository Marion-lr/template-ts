import { Clock, Mode } from '../models/clock';
import { ClockView } from '../views/clock_view';

export class ClockController {
  private clock: Clock;
  private view: ClockView;

  constructor(clock: Clock, view: ClockView) {
    this.clock = clock;
    this.view = view;
    this.initialize();
  }

  initialize(): void {
    this.view.render(this.clock);
    document.getElementById('modeButton').addEventListener('click', () => this.changeMode());
    document.getElementById('increaseButton').addEventListener('click', () => this.increase());
    document.getElementById('lightButton').addEventListener('click', () => this.toggleLight());
    this.startClock();
  }

  startClock(): void {
    const updateClock = () => {
      this.clock.tick();
      this.view.updateTimeDisplay(this.clock.getCurrentTime());
      setTimeout(updateClock, 1000);
    };
  
    updateClock();
  }

  changeMode(): void {
    const currentMode = this.clock.getMode();
    if (currentMode === Mode.DISPLAY) {
      this.clock.setMode(Mode.EDIT_HOUR);
    } else if (currentMode === Mode.EDIT_HOUR) {
      this.clock.setMode(Mode.EDIT_MINUTE);
    } else {
      this.clock.setMode(Mode.DISPLAY);
    }
    this.view.updateTimeDisplay(this.clock.getCurrentTime());
  }

  increase(): void {
    const currentMode = this.clock.getMode();
    if (currentMode === Mode.EDIT_HOUR) {
      this.clock.incrementHour();
    } else if (currentMode === Mode.EDIT_MINUTE) {
      this.clock.incrementMinute();
    }
    this.view.updateTimeDisplay(this.clock.getCurrentTime());
  }

  toggleLight(): void {
    this.view.toggleLight(!this.view['lightOn'], this.clock.getCurrentTime());
  }
}
