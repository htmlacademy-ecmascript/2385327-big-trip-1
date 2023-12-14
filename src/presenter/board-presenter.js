
import NewEditPoint from '../view/edit-point.js';
import NewListFilter from '../view/list-filter.js';
import NewListItem from '../view/list-item.js';
import NewListSort from '../view/list-sort.js';
import NewPoint from '../view/new-point.js';
import NewFilters from '../view/filters.js';
import NewTripEvents from '../view/trip-events.js';
import {render} from '../render.js';

export default class TripPresenter {
  filters = new NewFilters();
  tripEvents = new NewTripEvents();


  init() {
    render(new NewListFilter(), this.filters.getElement());
    render(new NewListSort(), this.tripEvents.getElement());
    render(new NewEditPoint(), this.tripEvents.getElement());


    for (let i = 0; i < 3; i++) {
      render(new NewListItem(), this.tripEvents.getElement());
    }

    render(new NewPoint(), this.tripEvents.getElement());
  }
}
