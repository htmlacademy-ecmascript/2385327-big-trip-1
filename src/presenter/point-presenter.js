import NewEditPoint from '../view/edit-point.js';
import NewListItem from '../view/list-item.js';
import {render, replace,} from '../framework/render.js';

export default class PointPresenter {
  #listItem = null;
  #editPoint = null;
  #tripContainer = null;
  #tripModel = null;
  #tripEvents = null;
  constructor({pointData, tripEvents}) {
    this.pointData = pointData;
    this.#tripEvents = tripEvents;
    // this.#tripContainer = tripContainer;
    // this.#tripModel = tripModel;
  }

  init() {
    this.#renderTrip(this.pointData);
  }

  #replaceItemToForm() {
    replace(this.#editPoint, this.#listItem);
  }

  replaceFormToItem(){
    replace(this.#listItem, this.#editPoint);
  }


  #renderTrip(trip){

    this.#listItem = new NewListItem({
      trip,
      onEditClick: () => {
        this.#replaceItemToForm();
      }});
    this.#editPoint = new NewEditPoint({
      onFormSubmit: () => {
        this.replaceFormToItem();
      },
      onFormClose: () => {
        this.replaceFormToItem();
      }

    });

    render (this.#listItem, this.#tripEvents.element);
  }
}


