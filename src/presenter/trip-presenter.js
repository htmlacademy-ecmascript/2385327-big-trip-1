
import NewEditPoint from '../view/edit-point.js';
import NewListItem from '../view/list-item.js';
import NewListSort from '../view/list-sort.js';
import NewPoint from '../view/new-point.js';
import PointPresenter from './point-presenter.js';
import NewListEmpty from '../view/list-empty.js';
import NewTripEvents from '../view/trip-events.js';
import { render } from '../framework/render.js';

export default class TripPresenter {
  #tripEvents = new NewTripEvents();
  #tripModel = null;
  #tripList = [];
  #tripContainer = null;

  #pointPresenters = [];

  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
  }

  #renderList(){
    for (let i = 0; i < this.#tripModel.trips.length; i++) {
      const pointData = this.#tripModel.trips[i];
      const pointPresenter = new PointPresenter({
        pointData,
        tripEvents: this.#tripEvents,
        clickOnFavorite: (id) => this.#clickOnFavorite(id),
        closeForms: () => this.closeEditForms(),
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

  #clickOnFavorite(id){
    this.#tripModel.toggleFavorite(id);
    this.#pointPresenters.forEach((point) => {
      point.removeTrip();
    });
    this.init();
  }

  closeEditForms(){
    this.#pointPresenters.forEach((point) => {
      point.resetView();
    });
  }
}
