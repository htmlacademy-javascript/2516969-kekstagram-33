import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './utils.js';

import {
  POST_QUANTITY,
  COMMENTS_QUANTITY,
  PHOTO_DESCRIPTIONS,
  LIKES_QUANTITY,
  AVATAR_QUANTITY,
  COMMENT_MESSAGES,
  USER_NAMES
} from './photo-data.js';

function getDescription() {
  return getRandomArrayElement(PHOTO_DESCRIPTIONS);
}

function getLikes() {
  return getRandomInteger(LIKES_QUANTITY.min, LIKES_QUANTITY.max);
}

function getPhotoUrl(id) {
  return `photos/${id}.jpg`;
}

function generatePhoto(id) {
  return {
    id,
    url: getPhotoUrl(id),
    description: getDescription(),
    likes: getLikes(),
    comments: generateComments(),
  };
}

function generateAvatarUrl() {
  const avatarId = getRandomInteger(AVATAR_QUANTITY.min, AVATAR_QUANTITY.max);

  return `img/avatar-${avatarId}.svg`;
}

function getCommentMessage() {
  return getRandomArrayElement(COMMENT_MESSAGES);
}

function getName() {
  return getRandomArrayElement(USER_NAMES);
}

const getCommentId = createRandomIdFromRangeGenerator(0, POST_QUANTITY * COMMENTS_QUANTITY.max);

function generateComment() {
  return {
    id: getCommentId(),
    avatar: generateAvatarUrl(),
    message: getCommentMessage(),
    name: getName(),
  };
}

function generateComments() {
  const result = [];
  const max = getRandomInteger(COMMENTS_QUANTITY.min, COMMENTS_QUANTITY.max);

  for (let i = 0; i <= max; i++) {
    result.push(generateComment());
  }
  return result;
}

function generatePosts() {
  const result = [];
  for (let i = 1; i <= POST_QUANTITY; i++) {
    result.push(generatePhoto(i));
  }
  return result;
}

export {generatePosts};
