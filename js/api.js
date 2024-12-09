import { renderPosts } from './render-photo.js';
import { hideForm, setUserFormSubmit} from './input-form.js';
import { showDataErrorMessage } from './messages.js';

fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((posts) => {
    renderPosts(posts);
  })
  .catch(() => {
    showDataErrorMessage();
  });

setUserFormSubmit(hideForm);
