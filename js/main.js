import { generatePosts } from './generate-photo-data.js';
import { renderPosts } from './render-photo.js';
renderPosts(generatePosts());
import { openAndClose } from './input-form.js';
openAndClose();
import './validate-input-form.js';
