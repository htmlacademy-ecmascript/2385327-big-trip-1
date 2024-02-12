import NewEditPoint from '../view/edit-point.js';
import NewListItem from '../view/list-item.js';
import NewTripEvents from '../view/trip-events.js';
import {render, replace,} from '../framework/render.js';

export default class PointPresenter {
  #tripEvents = new NewTripEvents();
  #listItem = null;
  #editPoint = null;
  #tripContainer = null;
  #tripModel = null;
  #tripPresenter = null;
  constructor({tripContainer, tripModel, tripPresenter}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
    this.#tripPresenter = tripPresenter;
  }

  init() {
    render(this.#tripEvents, this.#tripContainer);


    for (let i = 0; i < this.#tripModel.trips.length; i++) {
      this.#renderTrip(this.#tripModel.trips[i]);
    }
  }

  #replaceItemToForm() {
    replace(this.#editPoint, this.#listItem);
  }

  #replaceFormToItem(){
    replace(this.#listItem, this.#editPoint);
  }

  #escKeyDownHandler(evt){
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.replaceFormToItem();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  }

  #renderTrip(trip){

    this.#listItem = new NewListItem({
      trip,
      onEditClick: () => {
        this.#replaceItemToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      }});
    this.#editPoint = new NewEditPoint({
      onFormSubmit: () => {
        this.#replaceFormToItem();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },

      onFormClose: () => {
        this.#replaceFormToItem();
      }

    });


    render (this.#listItem, this.#tripEvents.element);
  }
}


