const NONE = {
  NAME: 'none',
  MIN: 0,
  MAX: 100,
  STEP: 1,
  UNITS: ''
};

const CHROME = {
  NAME: 'grayscale',
  MIN: 0,
  MAX: 1,
  STEP: 0.1,
  UNITS: ''
};

const SEPIA = {
  NAME: 'sepia',
  MIN: 0,
  MAX: 1,
  STEP: 0.1,
  UNITS: ''
};

const MARVIN = {
  NAME: 'invert',
  MIN: 0,
  MAX: 100,
  STEP: 1,
  UNITS: '%'
};

const PHOBOS = {
  NAME: 'blur',
  MIN: 0,
  MAX: 3,
  STEP: 0.1,
  UNITS: 'px'
};

const HEAT = {
  NAME: 'brightness',
  MIN: 1,
  MAX: 3,
  STEP: 0.1,
  UNITS: ''
};

const filtersMap = {
  none: NONE,
  chrome: CHROME,
  sepia: SEPIA,
  marvin: MARVIN,
  phobos: PHOBOS,
  heat: HEAT,
};
const effectSliderContainer = document.querySelector('.img-upload__effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effects = document.querySelectorAll('.effects__radio');
const image = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');

let newFilter;
effectSlider.classList.add('hidden');
effectSliderContainer.classList.add('hidden');
function setImageEffect() {
  if (newFilter.NAME !== NONE.NAME) {
    image.style.filter = `${newFilter.NAME}(${newFilter.MAX}${newFilter.UNITS})`;
    effectSlider.classList.remove('hidden');
    effectSliderContainer.classList.remove('hidden');

    effectSlider.noUiSlider.updateOptions({
      range: {
        min: newFilter.MIN,
        max: newFilter.MAX
      },
      start: newFilter.MAX,
      step: newFilter.STEP
    });

  } else {
    image.style.filter = '';
    effectSlider.classList.add('hidden');
    effectSliderContainer.classList.add('hidden');
  }
}

function updateImageEffect(value) {
  if (!newFilter) {
    return;
  }

  if (value !== newFilter.MAX) {
    image.style.filter = `${newFilter.NAME}(${value}${newFilter.UNITS})`;
  }
}

export function reset() {
  newFilter = filtersMap.none;
  setImageEffect();
}

noUiSlider.create(effectSlider, {
  range: {
    min: NONE.MIN,
    max: NONE.MAX
  },
  start: NONE.MAX,
  step: NONE.STEP,
  connect: 'lower',
  format: {
    to: (value) => Number(value),
    from: (value) => Number(value)
  }
});

effectSlider.noUiSlider.on('update', () => {
  effectLevel.value = effectSlider.noUiSlider.get();
  updateImageEffect(effectLevel.value);
});

for (const effect of effects) {
  effect.addEventListener('change', () => {
    newFilter = filtersMap[effect.value];
    setImageEffect();
  });
}
