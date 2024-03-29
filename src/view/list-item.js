import AbstractView from '../framework/view/abstract-view.js';


function createNewListItemTemplate(trip) {

  const {basePrice, eventDate, eventTime, destination, isFavorite} = trip;
  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${eventTime}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${eventTime}</time>
        </p>
        <p class="event__duration">30M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">20</span>
        </li>
      </ul>
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ' '}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}


export default class NewListItem extends AbstractView{
  #trip = null;
  #handleClick = null;
  #favouriteClick = null;
  //#isFavorite = false;
  constructor({trip, onEditClick, isFavourite}){
    super();
    this.#trip = trip;
    this.#handleClick = onEditClick;
    this.#favouriteClick = isFavourite;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#clickOnFavourite);
  }

  get template() {
    return createNewListItemTemplate(this.#trip);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
    console.log(evt)
  };

  #clickOnFavourite = (evt) => {
    evt.preventDefault();
    this.#favouriteClick();
    //this.#isFavorite = !this.#isFavorite;
    // if(this.#isFavorite){
    //   this.element.querySelector('.event__favorite-btn').classList.add('event__favorite-btn--active');
    // }else{
    //   this.element.querySelector('.event__favorite-btn').classList.remove('event__favorite-btn--active');
    // }
  };
}
