const FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png'];
const imageInput = document.querySelector('.img-upload__input');
const previewImage = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if(matches) {
    previewImage.src = URL.createObjectURL(file);
    effectsPreview.forEach((effect) => {
      effect.style. backgroundImage = `url(${URL.createObjectURL(file)}`;
    });
  }
});
