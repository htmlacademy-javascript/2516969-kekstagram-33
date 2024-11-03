const POST_QUANTITY = 25;

const COMMENTS_QUANTITY = {
  min: 0,
  max: 30
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function getDescription() {
  const descriptions = [
    'Как круто!',
    'Обожаю это фото',
    'Очень красиво смотрится',
    'Настоящее вдохновение',
    'Сразу чувствуется твоя энергия',
    'Просто невероятно',
    'Очень атмосферное фото',
    'Ты как всегда на высоте',
    'Настроение передается на все сто',
    'Какая классная атмосфера',
    'Так держать',
    'Завораживает',
    'Вот это уровень',
    'Очень круто получилось',
    'Видно, что от души',
    'Очень стильно',
    'Тебе это идет',
    'Гармония и красота',
    'Настоящий эстет',
    'Фантастическое фото',
    'Такой легкий кадр',
    'Прямо в самое сердце',
    'Словно кадр из фильма',
    'Как будто из мечты',
    'Очень вдохновляющий кадр',
  ];

  return getRandomArrayElement(descriptions);
}

function getLikes() {
  const min = 15;
  const max = 200;

  return getRandomInteger(min, max);
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
  const min = 1;
  const max = 6;
  const avatarId = getRandomInteger(min, max);

  return `img/avatar-${avatarId}.svg`;
}

function getCommentMessage() {
  const messages = [
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return getRandomArrayElement(messages);
}

function getName() {
  const names = [
    'Иван',
    'Анна',
    'Мария',
    'Алексей',
    'Екатерина',
    'Сергей',
    'Ольга',
    'Михаил',
    'Виктория',
    'Дмитрий',
  ];

  return getRandomArrayElement(names);
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

generatePosts();
