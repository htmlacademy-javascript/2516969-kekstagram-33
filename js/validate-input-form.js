const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_COUNT = 5;
const COMMENT_LENGTH = 140;
const form = document.querySelector('.img-upload__form');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');
const ValidationErrors = {
  HASHTAGS: {
    FORMAT: 'Введён невалидный хэштег.',
    MAX_COUNT: 'Превышено количество хэштегов.',
    NO_REPEAT: 'Ххэштеги повторяются.',
  },
  COMMENT: {
    MAX_LENGTH: 'Длина комментария больше 140 символов.',
  },
};

const normalizeComments = (inputHashtags) => inputHashtags.trim().split(/\s+/).filter(Boolean);

const checkHachtagCount = (hashtags) => hashtags.length <= HASHTAG_COUNT;

const checkDuplicates = (hashtags) => new Set(hashtags).size === hashtags.length;

const checkHachtagsFormat = (hashtag) => HASHTAG.test(hashtag);

const checkCommentLength = (comment) => comment.length <= COMMENT_LENGTH;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error',
}, false);

pristine.addValidator(
  hashtagFieldElement,
  (value) => normalizeComments(value).every(checkHachtagsFormat),
  ValidationErrors.HASHTAGS.FORMAT
);

pristine.addValidator(
  hashtagFieldElement,
  (value) => checkHachtagCount(normalizeComments(value)),
  ValidationErrors.HASHTAGS.MAX_COUNT
);

pristine.addValidator(
  hashtagFieldElement,
  (value) => checkDuplicates(normalizeComments(value)),
  ValidationErrors.HASHTAGS.NO_REPEAT
);

pristine.addValidator(
  commentFieldElement,
  (value) => checkCommentLength(value),
  ValidationErrors.COMMENT.MAX_LENGTH
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    form.submit();
  }
});
