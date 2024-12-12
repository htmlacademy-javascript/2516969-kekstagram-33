import { KeyCode } from './full-screen-render';
import { imageUploadInput } from './input-form';
const SET_TIMEOUT = 5000;

export function showDataErrorMessage() {
  const errContainer = document.querySelector('#data-error').content.cloneNode(true);
  document.body.appendChild(errContainer);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, SET_TIMEOUT);
}

export function showErrorMessage() {
  const errContainer = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(errContainer);

  const errorMessage = document.querySelector('.error');
  const closeButton = document.querySelector('.error__button');
  closeButton.focus();
  closeButton.addEventListener('click', () => {
    errorMessage.remove();
    imageUploadInput.focus();
  });

  errorMessage.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      errorMessage.remove();
      imageUploadInput.focus();
    }
  });

  errorMessage.addEventListener('keydown', (evt) => {
    if (evt.key === KeyCode.ESCAPE) {
      errorMessage.remove();
      imageUploadInput.focus();
    }
  });
}

export function showSuccesMessage() {
  const successContainer = document.querySelector('#success ').content.cloneNode(true);
  document.body.appendChild(successContainer);

  const successMessage = document.querySelector('.success');
  const closeButton = document.querySelector('.success__button');
  closeButton.focus();
  closeButton.addEventListener('click', () => {
    successMessage.remove();
  });

  successMessage.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      successMessage.remove();
    }
  });

  successMessage.addEventListener('keydown', (evt) => {
    if (evt.key === KeyCode.ESCAPE) {
      successMessage.remove();
    }
  });
}

