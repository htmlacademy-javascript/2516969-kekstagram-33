import { debounce } from './utils.js';
import { renderPosts } from './render-photo.js';

const FILTERS = {
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
const RANDOM_PHOTOS_COUNT = 10;
const DEBOUNCE_TIMEOUT = 500;
const sortContainer = document.querySelector('.img-filters');
const filterButtons = sortContainer.querySelectorAll('.img-filters__button');

function showSortButtons() {
  sortContainer.classList.remove('img-filters--inactive');
}

const sortByComments = (a, b) => b.comments.length - a.comments.length;

const sortPictures = (previews) => {
  const sortPhotosWithDebounce = debounce((filterType) => {
    let sortingPhotos = previews;
    switch (filterType) {
      case FILTERS.RANDOM:
        sortingPhotos = previews.slice(0, RANDOM_PHOTOS_COUNT);
        break;
      case FILTERS.DISCUSSED:
        sortingPhotos = previews.slice().sort(sortByComments);
        break;
      default:
        sortingPhotos = previews;
        break;
    }
    renderPosts(sortingPhotos);
  }, DEBOUNCE_TIMEOUT);

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((element) => element.classList.remove('img-filters__button--active'));
      const filterType = button.id;
      button.classList.add('img-filters__button--active');
      sortPhotosWithDebounce(filterType);
    });
  });
};

export { sortPictures, showSortButtons};
