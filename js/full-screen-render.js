const COMMENTS_STEP = 5;
const KeyCode = { ESCAPE: 'Escape', ENTER: 'Enter' };
const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('img');
const onPictureClose = bigPictureContainer.querySelector('.big-picture__cancel');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');

const totalCommentsCount = bigPictureContainer.querySelector('.social__comment-total-count');
const commentsCount = bigPictureContainer.querySelector('.social__comment-shown-count');
const socialCommentsContainer = bigPictureContainer.querySelector('.social__comments');
const commentTemplate = socialCommentsContainer.querySelector('.social__comment');
const onCommentsLoad = bigPictureContainer.querySelector('.comments-loader');
let commentsCounter = COMMENTS_STEP;
let comments;

function cleanCommentsInfo() {
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
  hideLoadCommentsButton();
  commentsCounter += COMMENTS_STEP;
}

function hideLoadCommentsButton() {
  if(commentsCounter >= comments.length) {
    onCommentsLoad.classList.add('hidden');
  } else {
    onCommentsLoad.classList.remove('hidden');
  }
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
  onPictureClose.removeEventListener('click', closeBigImage);
  onCommentsLoad.removeEventListener('click', renderMoreComments);
}

function openFullScreenImage(postData) {
  comments = postData.comments;

  cleanCommentsInfo();
  renderBigImage(postData);

  onPictureClose.addEventListener('click', closeBigImage);

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  onCommentsLoad.addEventListener('click', renderMoreComments);
}

export { openFullScreenImage };
