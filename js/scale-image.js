import { uploadCancelButton } from './input-form';
const SCALE_PARAM = {
  DEFAULT: 100,
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const MAX_SCALE = 100;

const onScaleSmaller = document.querySelector('.scale__control--smaller');
const onScaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

let newScale;

const numberToPercent = (number) => `${number}%`;

const defaultScale = () => {
  newScale = SCALE_PARAM.DEFAULT;
  previewImage.style.transform = `scale(${SCALE_PARAM.DEFAULT / MAX_SCALE})`;
};


function checkDisabledStatus() {
  if(newScale === SCALE_PARAM.MAX) {
    onScaleBigger.disabled = true;
  } else {
    onScaleBigger.disabled = false;
  }

  if(newScale === SCALE_PARAM.MIN) {
    onScaleSmaller.disabled = true;
  } else {
    onScaleSmaller.disabled = false;
  }
}


function makeBigger() {
  if (newScale < SCALE_PARAM.MAX) {
    newScale += SCALE_PARAM.STEP;
    scaleValue.value = numberToPercent(newScale);
    updateImageSize(newScale);
  }
  checkDisabledStatus();
  uploadCancelButton.focus();
}

function makeSmaller() {
  if (newScale > SCALE_PARAM.MIN) {
    newScale -= SCALE_PARAM.STEP;
    scaleValue.value = numberToPercent(newScale);
    updateImageSize(newScale);
  }
  checkDisabledStatus();
  uploadCancelButton.focus();
}

function updateImageSize(scale) {
  previewImage.style.transform = `scale(${scale / 100})`;
}

export function changeImageScale() {
  defaultScale();
  onScaleBigger.disabled = true;

  onScaleBigger.addEventListener('click', makeBigger);
  onScaleSmaller.addEventListener('click', makeSmaller);
}

export function removeImageScale() {
  onScaleBigger.disabled = false;
  onScaleSmaller.disabled = false;
  onScaleBigger.removeEventListener('click', makeBigger);
  onScaleSmaller.removeEventListener('click', makeSmaller);
}
