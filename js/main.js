import { generatePosts } from './generate-photo-data.js';
import { renderPosts } from './render-photo.js';
import './input-form.js';
import './validate-input-form.js';
renderPosts(generatePosts());
