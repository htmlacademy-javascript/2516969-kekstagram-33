import { generatePosts } from './generate-photo-data.js';
generatePosts();
import { renderPosts } from './render-photo.js';
renderPosts(generatePosts());
