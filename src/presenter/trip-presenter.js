import PointPresenter from './point-presenter.js';
import NewListEmpty from '../view/list-empty.js';
import NewTripEvents from '../view/trip-events.js';
import { render } from '../framework/render.js';


export default class TripPresenter {
  #tripEvents = new NewTripEvents();
  #tripModel = null;
  #pointPresenters = [];
  #tripList = [];
  #tripContainer = null;


  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
    //this.#pointPresenter = new PointPresenter({pointData});
  }

  #renderList(){
    for (let i = 0; i < this.#tripModel.trips.length; i++) {
      const pointData = this.#tripModel.trips[i];
      const pointPresenter = new PointPresenter({
        pointData,
        tripEvents: this.#tripEvents,
      });
      pointPresenter.init();
      this.#pointPresenters.push(pointPresenter);
    }
  }

  init() {
    this.#tripList = [...this.#tripModel.trips];
    this.#renderEmptyList();
    render(this.#tripEvents, this.#tripContainer);
    this.#renderList();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      for (let i = 0; i < this.#pointPresenters.length; i++) {
        this.#pointPresenters[i].replaceFormToItem();
      }
    }
  };

  #renderEmptyList() {
    if (this.#tripList.length === 0) {
      render(new NewListEmpty(), this.#tripEvents.element);
    }
  }

}
