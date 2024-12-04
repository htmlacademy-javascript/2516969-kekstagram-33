import { KeyCode } from './full-screen-render';
import { changeImageScale } from './scale-image';
const onFormOpen = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__overlay');
const onFormClose = document.querySelector('.img-upload__cancel');

function showForm() {
  form.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  onFormClose.addEventListener('click', hideForm);
  changeImageScale();
}
function hideForm() {
  form.classList.add('hidden');
  document.body.classList.remove('modal-open');
  onFormClose.removeEventListener('click', hideForm);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (evt.key === KeyCode.ESCAPE) {
    evt.preventDefault();
    hideForm();
  }
}
onFormOpen.addEventListener('change', showForm);
