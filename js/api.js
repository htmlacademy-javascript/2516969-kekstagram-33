import { renderPosts } from './render-photo.js';
import { onCancelButtonClick, setUserFormSubmit } from './input-form.js';
import { showDataErrorMessage } from './messages.js';
import { showSortButtons, sortPictures } from './sort-posts.js';

const GET_DATA = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
fetch(GET_DATA)
  .then((response) => response.json())
  .then((posts) => {
    renderPosts(posts);
    sortPictures(posts);
    showSortButtons();
  })
  .catch(() => {
    showDataErrorMessage();
  });

setUserFormSubmit(onCancelButtonClick);
