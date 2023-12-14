import NewEditPoint from './view/edit-point.js';
import NewListFilter from './view/list-filter.js';
import NewListItem from './view/list-item.js';
import NewListSort from './view/list-sort.js';
import NewPoint from './view/new-point.js';
import {render} from './render.js';
import TripPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.page-main .page-body__container');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const tripPresenter = new TripPresenter({tripContainer: siteMainElement});

render(new NewListFilter(), siteHeaderElement);
render(new NewListSort(), siteMainElement);
render(new NewEditPoint(), siteMainElement);
render(new NewListItem(), siteMainElement);
render(new NewListItem(), siteMainElement);
render(new NewListItem(), siteMainElement);
render(new NewPoint(), siteMainElement);

tripPresenter.init();
