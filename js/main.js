import { generatePosts } from './generate-photo-data.js';
import { renderPosts } from './render-photo.js';
import {openFullScreenImage} from './full-screen-render.js';
const data = generatePosts();
renderPosts(data);
openFullScreenImage(data);
