import { COMMENTS_QUANTITY } from './photo-data';
// const COMMENTS_STEP = 5;
// let commentsCount = COMMENTS_STEP;
// let currentComments = [];

const fullScreenImage = () => {
  const miniatures = document.querySelectorAll('.picture');
  const bigPictureContainer = document.querySelector('.big-picture');
  const bigPicture = document.querySelector('.big-picture__img img');
  const pictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeBigImage();
    }
  };

  const openBigImage = (miniature) => {
    const miniatureImage = miniature.querySelector('.picture__img');
    const miniatureImageLikes = miniature.querySelector('.picture__likes');

    bigPictureContainer.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPicture.src = miniatureImage.src;
    bigPicture.alt = miniatureImage.alt;
    bigPictureContainer.querySelector('.social__caption').textContent = miniatureImage.alt;
    bigPictureContainer.querySelector('.likes-count').textContent = miniatureImageLikes.textContent;

    document.addEventListener('keydown', onDocumentKeydown);
  };

  const closeBigImage = () => {
    bigPictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  pictureCloseButton.addEventListener('click', () => {
    closeBigImage();
  });

  miniatures.forEach((miniature) => {
    miniature.addEventListener('click', () => {
      openBigImage(miniature);
    });
  });
};

export { fullScreenImage };


