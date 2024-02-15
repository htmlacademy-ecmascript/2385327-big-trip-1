import {getRandomTrip} from '../mock/task.js';

const TRIP_COUNT = 4;

export default class TripModel {
  #trips = Array.from({length: TRIP_COUNT}, getRandomTrip);

  get trips() {
    return this.#trips;
  }
}
