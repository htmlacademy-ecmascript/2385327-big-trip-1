import {createElement} from '../render.js';

function createNewFiltersTemplate() {
  return (
    `<div class="trip-controls__filters">
    <h2 class="visually-hidden">Filter events</h2>
    <!-- Фильтры -->
  </div>`
  );
}

export default class NewFilters {
  getTemplate() {
    return createNewFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
