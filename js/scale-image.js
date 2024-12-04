const SCALE_PARAM = {
  DEFAULT: 100,
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const onScaleSmaller = document.querySelector('.scale__control--smaller');
const onScaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

let newScale;

const numberToPercent = (number) => `${number}%`;

const defaultScale = () => {
  newScale = SCALE_PARAM.DEFAULT;
  previewImage.style.transform = `scale(${SCALE_PARAM.DEFAULT / 100})`;
};

function makeBigger() {
  if (newScale < SCALE_PARAM.MAX) {
    newScale += SCALE_PARAM.STEP;
    scaleValue.value = numberToPercent(newScale);
    updateImageSize(newScale);
  }
}

function makeSmaller() {
  if (newScale > SCALE_PARAM.MIN) {
    newScale -= SCALE_PARAM.STEP;
    scaleValue.value = numberToPercent(newScale);
    updateImageSize(newScale);
  }
}

function updateImageSize(scale) {
  previewImage.style.transform = `scale(${scale / 100})`;
}

export function changeImageScale() {
  defaultScale();

  onScaleBigger.addEventListener('click', () => {
    makeBigger();
  });

  onScaleSmaller.addEventListener('click', () => {
    makeSmaller();
  });
}
