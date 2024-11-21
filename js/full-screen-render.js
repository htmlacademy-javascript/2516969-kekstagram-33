const openFullScreenImage = (postsData) => {
  const miniatures = document.querySelectorAll('.picture');
  const bigPictureContainer = document.querySelector('.big-picture');
  const bigPicture = bigPictureContainer.querySelector('img');
  const pictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');
  const totalCommentsCount = bigPictureContainer.querySelector('.social__comment-total-count');
  const likesCount = bigPictureContainer.querySelector('.likes-count');
  const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');

  function openBigImage(miniature) {
    const miniatureData = postsData.find((element) => element.id === Number(miniature.id));
    const commentsData = postsData.find((element) => element.id === Number(miniature.id)).comments;

    bigPictureContainer.classList.remove('hidden');
    document.body.classList.add('modal-open');

    bigPicture.src = miniatureData.url;
    bigPicture.alt = miniatureData.description;
    bigPictureCaption.textContent = miniatureData.description;
    likesCount.textContent = miniatureData.likes;
    totalCommentsCount.textContent = miniatureData.comments.length;
    renderComents(commentsData);
    document.addEventListener('keydown', onDocumentKeydown);
  }

  function renderComents(dataForComments) {
    const commentsContainer = document.querySelector('.social__comments');
    const template = commentsContainer.querySelector('.social__comment');

    const newFragment = document.createDocumentFragment();

    dataForComments.forEach(({ avatar, message, name }) => {
      const newComment = template.cloneNode(true);
      newComment.querySelector('.social__picture').src = avatar;
      newComment.querySelector('.social__picture').alt = name;
      newComment.querySelector('.social__text').textContent = message;
      newFragment.appendChild(newComment);
    });
    commentsContainer.appendChild(newFragment);
  }

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeBigImage();
    }
  }

  function closeBigImage() {
    bigPictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  pictureCloseButton.addEventListener('click', () => {
    closeBigImage();
  });

  miniatures.forEach((miniature) => {
    miniature.addEventListener('click', () => {
      openBigImage(miniature);
    });
  });
};

export { openFullScreenImage };

// import { COMMENTS_QUANTITY } from './photo-data';
// const COMMENTS_STEP = 5;
// let commentsCount = COMMENTS_STEP;
// let currentComments = [];
// const fullScreenImage = () => {
//   const miniatures = document.querySelectorAll('.picture');
//   const bigPictureContainer = document.querySelector('.big-picture');
//   const bigPicture = document.querySelector('.big-picture__img img');
//   const pictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');

//   const onDocumentKeydown = (evt) => {
//     if (evt.key === 'Escape') {
//       evt.preventDefault();
//       closeBigImage();
//     }
//   };

//   function openBigImage(miniature){
//     const miniatureImage = miniature.querySelector('.picture__img');
//     const miniatureImageLikes = miniature.querySelector('.picture__likes');

//     bigPictureContainer.classList.remove('hidden');
//     document.body.classList.add('modal-open');
//     bigPicture.src = miniatureImage.src;
//     bigPicture.alt = miniatureImage.alt;
//     bigPictureContainer.querySelector('.social__caption').textContent = miniatureImage.alt;
//     bigPictureContainer.querySelector('.likes-count').textContent = miniatureImageLikes.textContent;

//     document.addEventListener('keydown', onDocumentKeydown);
//   }

//   function closeBigImage() {
//     bigPictureContainer.classList.add('hidden');
//     document.body.classList.remove('modal-open');
//     document.removeEventListener('keydown', onDocumentKeydown);
//   }

//   pictureCloseButton.addEventListener('click', () => {
//     closeBigImage();
//   });

//   miniatures.forEach((miniature) => {
//     miniature.addEventListener('click', () => {
//       openBigImage(miniature);
//     });
//   });
// };

// export { fullScreenImage };


