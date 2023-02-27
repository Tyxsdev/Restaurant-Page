import './style.css';
import { builder } from './home.js';
import { setMenu } from './menu.js';
import { setWine } from './wines';
import { updateLiItems } from './updateEvents';

const content = document.querySelector('#content');
builder(content);
const items = updateLiItems();
items.menu.addEventListener('click', () => setMenu(content));
items.drinks.addEventListener('click', () => setWine(content));
