import {getRandomTrip} from '../mock/task.js';

const TRIP_COUNT = 4;

export default class TripModel {
  #trips = Array.from({length: TRIP_COUNT}, getRandomTrip);

  get trips() {
    return this.#trips;
  }

  toggleFavorite(id){
    console.log(id)
    console.log([...this.#trips])
    this.#trips = this.#trips.map((trip) => {
      if(id === trip.id){
        return {
          ...trip,
          isFavorite: !trip.isFavorite,
        };
      }
      return trip;
    });
    console.log([...this.#trips])
  }
}
