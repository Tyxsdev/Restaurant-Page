import './style.css';
import { builder } from './home.js';
import { setMenu } from './menu.js';
import { updateLiItems } from './updateEvents';

const content = document.querySelector('#content');
builder(content);
const items = updateLiItems();
items.menu.addEventListener('click', () => setMenu(content));
