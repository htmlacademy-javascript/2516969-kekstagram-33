import { KeyCode } from './full-screen-render';

export function showDataErrorMessage() {
  const errContainer = document.querySelector('#data-error').content.cloneNode(true);
  document.body.appendChild(errContainer);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, 5000);
}

export function showErrorMessage() {
  const errContainer = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(errContainer);

  const errorMessage = document.querySelector('.error');
  const closeButton = document.querySelector('.error__button');
  closeButton.focus();
  closeButton.addEventListener('click', () => {
    errorMessage.remove();
  });

  errorMessage.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      errorMessage.remove();
    }
  });

  errorMessage.addEventListener('keydown', (evt) => {
    if (evt.key === KeyCode.ESCAPE) {
      errorMessage.remove();
    }
  });
}

export function showSuccesMessage() {
  const successContainer = document.querySelector('#success ').content.cloneNode(true);
  document.body.appendChild(successContainer);

  const successMessage = document.querySelector('.success');
  const closeButton = document.querySelector('.success__button');

  closeButton.addEventListener('click', () => {
    successMessage.remove();
  });

  successMessage.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      successMessage.remove();
    }
  });

  successContainer.addEventListener('keydown', (evt) => {
    if (evt.key === KeyCode.ESCAPE) {
      successMessage.remove();
    }
  });
}

