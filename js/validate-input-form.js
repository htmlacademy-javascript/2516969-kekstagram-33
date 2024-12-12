const ValidationErrors = {
  HASHTAGS: {
    FORMAT: 'Введён невалидный хэштег.',
    MAX_COUNT: 'Превышено количество хэштегов.',
    NO_REPEAT: 'Хэштеги повторяются.',
  },
  COMMENT: {
    MAX_LENGTH: 'Длина комментария больше 140 символов.',
  },
};
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_COUNT = 5;
const COMMENT_LENGTH = 140;
const form = document.querySelector('.img-upload__form');
export const hashtagFieldElement = document.querySelector('.text__hashtags');
export const commentFieldElement = document.querySelector('.text__description');

const normalizeHashtags = (inputHashtags) => inputHashtags.trim().split(/\s+/).map((hashtag) => hashtag.toLowerCase()).filter(Boolean);

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
}, true);

pristine.addValidator(
  hashtagFieldElement,
  (value) => normalizeHashtags(value).every(checkHachtagsFormat),
  ValidationErrors.HASHTAGS.FORMAT
);

pristine.addValidator(
  hashtagFieldElement,
  (value) => checkHachtagCount(normalizeHashtags(value)),
  ValidationErrors.HASHTAGS.MAX_COUNT
);

pristine.addValidator(
  hashtagFieldElement,
  (value) => checkDuplicates(normalizeHashtags(value)),
  ValidationErrors.HASHTAGS.NO_REPEAT
);

pristine.addValidator(
  commentFieldElement,
  (value) => checkCommentLength(value),
  ValidationErrors.COMMENT.MAX_LENGTH
);
const validate = pristine.validate;
const reset = pristine.reset;
export {validate, reset};

