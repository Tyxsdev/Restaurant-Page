import Icon from './Wine.jpg';
import { createNav } from './setUp';
import { updateLiItems } from './updateEvents';

export function builder(content) {
  content.textContent = '';
  const h1 = document.createElement('h1');
  const myImg = new Image();
  const nav = createNav();
  myImg.src = Icon;
  myImg.classList.add('main-image');
  h1.textContent = 'Welcome to Wine and Fire Restaurant';
  content.appendChild(h1);
  content.appendChild(nav);
  content.appendChild(myImg);
  const items = updateLiItems();
  return items;
}
