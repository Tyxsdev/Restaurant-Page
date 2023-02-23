import Icon from './Wine.jpg';

export function builder(content) {
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  const firstLi = document.createElement('li');
  const secondLi = document.createElement('li');
  const thirdLi = document.createElement('li');
  const fourthLi = document.createElement('li');
  const myImg = new Image();
  myImg.src = Icon;
  myImg.classList.add('main-image');
  h1.textContent = 'Welcome to Wine and Fire Restaurant';
  h3.textContent = 'Select a section to visit:';
  firstLi.textContent = 'Home';
  secondLi.textContent = 'Menu';
  thirdLi.textContent = 'Drinks';
  fourthLi.textContent = 'About Us';
  firstLi.classList.add('home');
  secondLi.classList.add('menu');
  thirdLi.classList.add('drinks');
  fourthLi.classList.add('about');
  ul.appendChild(firstLi);
  ul.appendChild(secondLi);
  ul.appendChild(thirdLi);
  ul.appendChild(fourthLi);
  nav.appendChild(h3);
  nav.appendChild(ul);
  content.appendChild(h1);
  content.appendChild(nav);
  content.appendChild(myImg);
}
