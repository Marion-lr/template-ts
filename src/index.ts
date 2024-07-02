import './index.css';
import { Clock } from './models/clock';
import { ClockView } from './views/clock_view';
import { ClockController } from './controllers/clock_controller';

const clocksContainer = document.getElementById('clocksContainer')!;
const addClockButton = document.getElementById('addClockButton')!;

const createClock = (timezoneOffset: number) => {
  const clockElement = document.createElement('div');
  clockElement.classList.add('clock-container');
  clockElement.innerHTML = `
    <div class="circle">
      <div class="rectangle">
        <span class="timeDisplay">00:00:00</span>
      </div>
    </div>
    <div class="buttons-container">
      <button class="modeButton">Mode</button>
      <button class="increaseButton">Increase</button>
      <button class="lightButton">Light</button>
      <button class="resetButton">Reset</button>
      <button class="formatButton">24h/AM-PM</button>
    </div>
    <div class="timezone-display">GMT${timezoneOffset >= 0 ? '+' : ''}${timezoneOffset}</div>
  `;
  clocksContainer.appendChild(clockElement);

  const clock = new Clock(timezoneOffset);
  const view = new ClockView(clockElement);
  new ClockController(clock, view);
};

addClockButton.addEventListener('click', () => {
  const timezoneOffset = prompt('Enter timezone offset:', '0');
  createClock(parseInt(timezoneOffset, 10));
});

// Create initial clocks
createClock(0);  // Local time
createClock(1);  // GMT+1
createClock(-5); // GMT-5
