import { createNav } from './setUp';
import { updateLiItems } from './updateEvents';
import { setMenu } from './menu';
import { setWine } from './wines';

export function setAbout(content) {
  content.textContent = '';
  window.scrollTo(0, 0);
  const nav = createNav();
  const main = document.createElement('div');
  const containerOne = document.createElement('div');
  const h3One = document.createElement('h3');
  const h3Two = document.createElement('h3');
  const h3Three = document.createElement('h3');
  const pOne = document.createElement('p');
  const pTwo = document.createElement('p');
  const liItems = nav.querySelectorAll('li');
  const about = nav.querySelector('.about');
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  li.classList.add('credit');
  const li2 = li.cloneNode();
  const li3 = li.cloneNode();
  const li4 = li.cloneNode();
  const li5 = li.cloneNode();
  const link1 = document.createElement('a');
  link1.target = '_blank';
  const link2 = link1.cloneNode();
  const link3 = link1.cloneNode();
  const link4 = link1.cloneNode();
  const link5 = link1.cloneNode();
  const github = document.createElement('a');

  github.href = 'https://github.com/Tyxsdev';

  link1.href =
    'https://pixabay.com/users/stevepb-282134/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2443699';
  link2.href =
    'https://pixabay.com/users/cattalin-560479/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=518032';
  link3.href =
    'https://pixabay.com/users/ritae-19628/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2169305';
  link4.href =
    'https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=541922';
  link5.href =
    'https://pixabay.com/users/nickype-10327513/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5087479';
  link1.textContent = `Steve Buissinne`;
  link2.textContent = `cattalin`;
  link3.textContent = `-Rita-👩‍🍳 und 📷 mit ❤`;
  link4.textContent = `congerdesign`;
  link5.textContent = `Nicky ❤️🌿🐞🌿❤️`;

  h3One.textContent = `Who are we?`;
  pOne.textContent = `Welcome to our restaurant, where we offer an exceptional selection of wines to complement your dining experience. Our wine list has been thoughtfully curated to showcase some of the finest varietals from around the world, each carefully selected for their unique flavors and aromas.
    Whether you prefer a full-bodied red wine to pair with your steak, a crisp white to complement your seafood, or a bubbly champagne for a special occasion, we have something to suit every palate. Our knowledgeable staff is always on hand to offer recommendations and help you find the perfect wine to match your meal.`;
  h3Two.textContent = `About this project:`;
  pTwo.textContent = `This webpage was created as part of the free course "The Odin Project". You can find my other projects on my GitHub: ${github}`;
  h3Three.textContent = `Image Credits:`;
  containerOne.classList.add('dish');
  containerOne.style.padding = '3rem';
  containerOne.style.display = 'block';
  github.classList.add('git');
  liItems.forEach((e) => e.classList.remove('selected'));
  about.classList.add('selected');
  nav.style.margin = '0';

  const containerTwo = containerOne.cloneNode();
  const containerThree = containerOne.cloneNode();

  li.appendChild(link1);
  li2.appendChild(link2);
  li3.appendChild(link3);
  li4.appendChild(link4);
  li5.appendChild(link5);
  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  containerOne.appendChild(pOne);
  containerTwo.appendChild(pTwo);
  containerThree.appendChild(ul);
  main.appendChild(nav);
  main.appendChild(h3One);
  main.appendChild(containerOne);
  main.appendChild(h3Two);
  main.appendChild(containerTwo);
  main.appendChild(h3Three);
  main.appendChild(containerThree);
  content.appendChild(main);

  const items = updateLiItems();
  items.home.addEventListener('click', () => window.location.reload());
  items.menu.addEventListener('click', () => setMenu(content));
  items.drinks.addEventListener('click', () => setWine(content));
}
