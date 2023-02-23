import './style.css';
import { builder } from './home.js';
import { setMenu } from './menu.js';

const content = document.querySelector('#content');
builder(content);
const menu = content.querySelector('.menu');
const drinks = content.querySelector('.drinks');
const about = content.querySelector('.about');

menu.addEventListener('click', () => setMenu(content));
