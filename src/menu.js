import { createNav } from './setUp';
import Salmon from './salmon.jpg';
import Asparagous from './asparagus.jpg';
import { updateLiItems } from './updateEvents';

export function setMenu(content) {
  content.textContent = '';
  window.scrollTo(0, 0);
  const nav = createNav();
  const main = document.createElement('div');
  const h3 = document.createElement('h3');
  const dishesOne = document.createElement('div');
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
  const menu = nav.querySelector('.menu');

  h3.textContent = 'Dishes of the day';
  imageOne.src = Salmon;
  h4One.textContent = 'Salmon with vegatables';
  pOne.textContent =
    'Seasoned with spices selected by the house, an irresistible dish ideal for lunch or dinner';
  imageTwo.src = Asparagous;
  h4Two.textContent = 'Steak with asparagous';
  pTwo.textContent =
    'A steak accompanied with asparagus ideal to combine with a good wine';
  span.textContent = 'Download our full menu here';

  main.classList.add('main');
  dishesOne.classList.add('dish');
  containerOne.classList.add('container');
  containerTwo.classList.add('container');
  imageOne.classList.add('image');
  imageTwo.classList.add('image');
  span.classList.add('download');

  liItems.forEach((e) => e.classList.remove('selected'));
  menu.classList.add('selected');

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
  dishesOne.appendChild(containerTwo);

  const dishesTwo = dishesOne.cloneNode(true);
  const dishesThree = dishesOne.cloneNode(true);

  main.appendChild(h3);
  main.appendChild(dishesOne);
  main.appendChild(dishesTwo);
  main.appendChild(dishesThree);
  main.appendChild(span);

  content.appendChild(nav);
  content.appendChild(main);
  const items = updateLiItems();
  items.home.addEventListener('click', () => window.location.reload());
}
