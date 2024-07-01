import './index.css';
import { Clock } from './models/clock';
import { ClockView } from './views/clock_view';
import { ClockController } from './controllers/clock_controller';

const clock = new Clock();
const view = new ClockView();
const controller = new ClockController(clock, view);