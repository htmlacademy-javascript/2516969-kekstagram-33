import { generatePosts } from './generate-photo-data.js';
generatePosts();
import { renderPosts } from './render-photo.js';
renderPosts(generatePosts());
import {fullScreenImage} from './full-screen-render.js';
fullScreenImage();
