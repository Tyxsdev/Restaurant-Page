import Icon from './WoK.jpg';

export function builder(content) {
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  const firstLi = document.createElement('li');
  const secondLi = document.createElement('li');
  const thirdLi = document.createElement('li');
  const myImg = new Image();
  myImg.src = Icon;
  myImg.classList.add('main-image');
  h1.textContent = 'Welcome to the Stormligth Restaurant';
  h3.textContent = 'Select a section to visit:';
  firstLi.textContent = 'Info';
  secondLi.textContent = 'About us';
  thirdLi.textContent = 'Contact';
  ul.appendChild(firstLi);
  ul.appendChild(secondLi);
  ul.appendChild(thirdLi);
  nav.appendChild(h3);
  nav.appendChild(ul);
  content.appendChild(h1);
  content.appendChild(nav);
  content.appendChild(myImg);
}
