
import NewEditPoint from '../view/edit-point.js';
import NewListItem from '../view/list-item.js';
import NewListSort from '../view/list-sort.js';
import NewPoint from '../view/new-point.js';
import NewTripEvents from '../view/trip-events.js';
import {render} from '../render.js';

export default class TripPresenter {

  tripEvents = new NewTripEvents();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripEvents, this.tripContainer);
    render(new NewListSort(), this.tripEvents.getElement());
    render(new NewEditPoint(), this.tripEvents.getElement());


    for (let i = 0; i < 3; i++) {
      render(new NewListItem(), this.tripEvents.getElement());
    }

    render(new NewPoint(), this.tripEvents.getElement());
  }
}
