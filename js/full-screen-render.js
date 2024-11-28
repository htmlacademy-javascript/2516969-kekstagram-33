const KeyCode = { ESCAPE: 'Escape', ENTER: 'Enter' };
const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('img');
const pictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');

const totalCommentsCount = bigPictureContainer.querySelector('.social__comment-total-count');
const commentsCount = bigPictureContainer.querySelector('.social__comment-shown-count');
const socialCommentsContainer = bigPictureContainer.querySelector('.social__comments');
const commentTemplate = socialCommentsContainer.querySelector('.social__comment');
const loadCommentsButton = bigPictureContainer.querySelector('.comments-loader');
let commentsCounter = 5;
const COMMENTS_STEP = 5;
let comments;

function clean() {
  socialCommentsContainer.innerHTML = '';
  commentsCount.innerHTML = '';
  commentsCounter = COMMENTS_STEP;
}

function renderBigImage(postData) {
  bigPicture.src = postData.url;
  bigPicture.alt = postData.description;
  bigPictureCaption.textContent = postData.description;

  likesCount.textContent = postData.likes;
  totalCommentsCount.textContent = postData.comments.length;
  renderMoreComments(comments);
  document.addEventListener('keydown', onDocumentKeydown);
}

function createComent(dataForComment) {
  const newComment = commentTemplate.cloneNode(true);
  newComment.querySelector('.social__picture').src = dataForComment.avatar;
  newComment.querySelector('.social__picture').alt = dataForComment.name;
  newComment.querySelector('.social__text').textContent = dataForComment.message;
  return newComment;
}

function renderComments(dataForComments) {
  for (const data of dataForComments) {
    socialCommentsContainer.appendChild(createComent(data));
  }
}

function renderMoreComments() {
  renderComments(comments.slice(commentsCounter - COMMENTS_STEP, commentsCounter));
  commentsCount.textContent = (commentsCounter > comments.length) ? comments.length : commentsCounter;
  if(commentsCounter >= comments.length) {
    loadCommentsButton.classList.add('hidden');
  } else {
    loadCommentsButton.classList.remove('hidden');
  }
  commentsCounter += COMMENTS_STEP;
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
  loadCommentsButton.removeEventListener('click', renderMoreComments);
}

function openFullScreenImage(postData) {
  comments = postData.comments;

  clean();
  renderBigImage(postData);

  pictureCloseButton.addEventListener('click', closeBigImage);

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  loadCommentsButton.addEventListener('click', renderMoreComments);
}

export { openFullScreenImage };
