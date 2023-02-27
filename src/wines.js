import { createNav } from './setUp';
import White from './white-wine.jpg';
import Red from './red-wine.jpg';
import { updateLiItems } from './updateEvents';
import { setMenu } from './menu.js';
import { setAbout } from './about';

export function setWine(content) {
  content.textContent = '';
  window.scrollTo(0, 0);
  const nav = createNav();
  const main = document.createElement('div');
  const h3 = document.createElement('h3');
  const dishesOne = document.createElement('div');
  const dishesTwo = document.createElement('div');
  const containerOne = document.createElement('div');
  const imageOne = new Image();
  const descriptionOne = document.createElement('div');
  const h4One = document.createElement('h4');
  const pOne = document.createElement('p');
  const containerTwo = document.createElement('div');
  const imageTwo = new Image();
  const descriptionTwo = document.createElement('div');
  const h4Two = document.createElement('h4');
  const pTwo = document.createElement('p');
  const span = document.createElement('span');
  const liItems = nav.querySelectorAll('li');
  const wines = nav.querySelector('.drinks');

  h3.textContent = 'Recommended Wines';
  imageOne.src = Red;
  h4One.textContent = 'Red wine from Scadrial';
  pOne.textContent =
    'Freshly sliced strawberry and lemon aromas. Medium body, firm and silky tannins and a linear finish. Firm and racy.';
  imageTwo.src = White;
  h4Two.textContent = 'White wine from Roshar';
  pTwo.textContent =
    'Opens with a clear, dense, complex and lemony-flavored, finessed and pure nose of great delicacy.';
  span.textContent = `Download our full drink' s menu here`;

  main.classList.add('main');
  dishesOne.classList.add('dish');
  dishesTwo.classList.add('dish');
  containerOne.classList.add('container');
  containerTwo.classList.add('container');
  imageOne.classList.add('image');
  imageTwo.classList.add('image');
  imageTwo.style.gridColumn = '2 / 3';
  descriptionTwo.style.gridRow = '1 / 2';

  span.classList.add('download');

  liItems.forEach((e) => e.classList.remove('selected'));
  wines.classList.add('selected');

  nav.style.margin = '0';

  descriptionOne.appendChild(h4One);
  descriptionOne.appendChild(pOne);
  descriptionTwo.appendChild(h4Two);
  descriptionTwo.appendChild(pTwo);
  containerOne.appendChild(imageOne);
  containerOne.appendChild(descriptionOne);
  containerTwo.appendChild(imageTwo);
  containerTwo.appendChild(descriptionTwo);
  dishesOne.appendChild(containerOne);
  dishesTwo.appendChild(containerTwo);

  main.appendChild(h3);
  main.appendChild(dishesOne);
  main.appendChild(dishesTwo);
  main.appendChild(span);

  content.appendChild(nav);
  content.appendChild(main);
  const items = updateLiItems();
  items.home.addEventListener('click', () => window.location.reload());
  items.menu.addEventListener('click', () => setMenu(content));
  items.about.addEventListener('click', () => setAbout(content));
}
