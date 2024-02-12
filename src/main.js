import NewListFilter from './view/list-filter.js';
import {render} from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointPresenter from './presenter/point-presenter.js';
import TripModel from './model/model.js';

const siteMainElement = document.querySelector('.page-main .page-body__container');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const tripModel = new TripModel();
const tripPresenter = new TripPresenter({tripContainer: siteMainElement, tripModel,});
const pointPresenter = new PointPresenter({tripContainer: siteMainElement, tripModel,});

render(new NewListFilter(), siteHeaderElement);


tripPresenter.init();
pointPresenter.init();
