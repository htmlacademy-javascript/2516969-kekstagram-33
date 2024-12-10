import { openFullScreenImage } from './full-screen-render.js';

const renderPosts = (dataForPosts) => {
  const pictureContainer = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const newFragment = document.createDocumentFragment();
  const pictures = pictureContainer.querySelectorAll('.picture');

  pictures.forEach((element) => {
    element.remove();
  });

  dataForPosts.forEach((postData) => {
    const { id, url, description, likes, comments } = postData;
    const newPhoto = template.cloneNode(true);
    newPhoto.id = id;
    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__img').alt = description;
    newPhoto.querySelector('.picture__comments').textContent = comments.length;
    newPhoto.querySelector('.picture__likes').textContent = likes;
    newFragment.appendChild(newPhoto);

    newPhoto.addEventListener('click', () => {
      openFullScreenImage(postData);
    });

  });
  pictureContainer.appendChild(newFragment);
};
export { renderPosts };

