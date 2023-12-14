import NewListFilter from './view/list-filter.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const siteMainElement = document.querySelector('.page-main .page-body__container');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const tripPresenter = new TripPresenter({tripContainer: siteMainElement});

render(new NewListFilter(), siteHeaderElement);


tripPresenter.init();
