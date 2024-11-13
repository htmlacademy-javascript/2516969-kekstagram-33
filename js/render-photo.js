import {generatePosts} from './generate-photo-data';

const pictureContainer = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const newPhotos = generatePosts();

const newFragment = document.createDocumentFragment();

newPhotos.forEach(({url, description, likes, comments}) => {
  const newPhoto = template.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = url;
  newPhoto.querySelector('.picture__img').alt = description;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  newFragment.appendChild(newPhoto);
});
pictureContainer.appendChild(newFragment);
