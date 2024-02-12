import PointPresenter from './point-presenter.js';
import NewTripEvents from '../view/trip-events.js';
import NewListEmpty from '../view/list-empty.js';
import { render } from '../framework/render.js';


export default class TripPresenter {
  #tripEvents = new NewTripEvents();
  #listItem = null;
  #editPoint = null;
  #tripContainer = null;
  #tripModel = null;
  #pointPresenter = null;
  #tripList = [];


  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
    this.#pointPresenter = new PointPresenter({tripContainer: this.#tripContainer, tripModel: this.#tripModel, tripPresenter: this});

    this.init();
  }

  init() {
    this.#tripList = [...this.#tripModel.trips];
    this.#renderEmptyList();
  }

  #renderEmptyList() {
    if (this.#tripList.length === 0) {
      render(new NewListEmpty(), this.#tripList.element);
    }
  }

}
