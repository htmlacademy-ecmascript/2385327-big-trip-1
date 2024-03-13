import AbstractView from '../framework/view/abstract-view.js';

function createNewTripEventsTemplate() {
  return (
    `<section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>

    <!-- Сортировка -->

    <!-- Контент -->
  </section>`
  );
}

export default class NewTripEvents extends AbstractView {
  constructor(){
    super();
  }

  get template() {
    return createNewTripEventsTemplate();
  }
}
