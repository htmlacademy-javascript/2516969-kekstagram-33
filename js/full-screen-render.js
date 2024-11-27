const KeyCode = { ESCAPE: 'Escape', ENTER: 'Enter' };
const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('img');
const pictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');
const totalCommentsCount = bigPictureContainer.querySelector('.social__comment-total-count');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');

function renderBigImage(postData) {
  bigPicture.src = postData.url;
  bigPicture.alt = postData.description;
  bigPictureCaption.textContent = postData.description;
  likesCount.textContent = postData.likes;
  totalCommentsCount.textContent = postData.comments.length;
  renderComents(postData.comments);
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
  if (evt.key === KeyCode.ESCAPE) {
    evt.preventDefault();
    closeBigImage();
  }
}

function closeBigImage() {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.removeEventListener('click', closeBigImage);
}

function openFullScreenImage(postData) {
  renderBigImage(postData);

  pictureCloseButton.addEventListener('click', closeBigImage);

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

export { openFullScreenImage };
