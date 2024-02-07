
import NewEditPoint from '../view/edit-point.js';
import NewListItem from '../view/list-item.js';
import NewListSort from '../view/list-sort.js';
import NewPoint from '../view/new-point.js';
import NewTripEvents from '../view/trip-events.js';
import {render, replace,} from '../framework/render.js';

export default class TripPresenter {
  #tripEvents = new NewTripEvents();
  #tripContainer = null;
  #tripModel = null;

  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
  }

  init() {
    render(this.#tripEvents, this.#tripContainer);
    render(new NewListSort(), this.#tripEvents.element);
    //render(new NewEditPoint(), this.#tripEvents.element);


    for (let i = 0; i < this.#tripModel.trips.length; i++) {
      this.#renderTrip(this.#tripModel.trips[i]);
    }

    render(new NewPoint({trip: this.#tripModel.trips[0]}), this.#tripEvents.element);
  }

  #renderTrip(trip){
    const escKeyDownHandler = (evt) =>{
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToItem();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const listItem = new NewListItem({
      trip,
      onEditClick: () => {
        replaceItemToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }});
    const tripEditComponent = new NewEditPoint({

      onFormSubmit: () => {
        replaceFormToItem();
        document.removeEventListener('keydown', escKeyDownHandler);
      },

      onFormClose: () => {
        replaceFormToItem();
      }

    });

    function replaceItemToForm(){
      replace(tripEditComponent, listItem);
    }

    function replaceFormToItem(){
      replace(listItem, tripEditComponent);
    }

    render (listItem, this.#tripEvents.element);
  }
}
