import { uploadCancelButton } from './input-form';
const SCALE_PARAM = {
  DEFAULT: 100,
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const MAX_SCALE = 100;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
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
    scaleControlBigger.disabled = true;
  } else {
    scaleControlBigger.disabled = false;
  }

  if(newScale === SCALE_PARAM.MIN) {
    scaleControlSmaller.disabled = true;
  } else {
    scaleControlSmaller.disabled = false;
  }
}


function onScaleBiggerClick() {
  if (newScale < SCALE_PARAM.MAX) {
    newScale += SCALE_PARAM.STEP;
    scaleValue.value = numberToPercent(newScale);
    updateImageSize(newScale);
  }
  checkDisabledStatus();
  uploadCancelButton.focus();
}

function onScaleSmallerClick() {
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
  scaleControlBigger.disabled = true;

  scaleControlBigger.addEventListener('click', onScaleBiggerClick);
  scaleControlSmaller.addEventListener('click', onScaleSmallerClick);
}

export function removeImageScale() {
  scaleControlBigger.disabled = false;
  scaleControlSmaller.disabled = false;
  scaleControlBigger.removeEventListener('click', onScaleBiggerClick);
  scaleControlSmaller.removeEventListener('click', onScaleSmallerClick);
}
