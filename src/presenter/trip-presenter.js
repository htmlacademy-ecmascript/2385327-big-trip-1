
<<<<<<< Updated upstream
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
=======
export default class TripPresenter {
  #tripEvents = new NewTripEvents();
  #tripModel = null;
  #tripList = [];
  #tripContainer = null;

  #pointPresenters = [];

>>>>>>> Stashed changes

  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
  }

  init() {
    render(this.#tripEvents, this.#tripContainer);
<<<<<<< Updated upstream
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
=======
    this.#renderList();
  }

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

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

>>>>>>> Stashed changes
}
