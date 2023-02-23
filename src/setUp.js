function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const firstLi = document.createElement('li');
  const secondLi = document.createElement('li');
  const thirdLi = document.createElement('li');
  const fourthLi = document.createElement('li');
  firstLi.textContent = 'Home';
  secondLi.textContent = 'Menu';
  thirdLi.textContent = 'Drinks';
  fourthLi.textContent = 'About Us';
  firstLi.classList.add('home', 'selected');
  secondLi.classList.add('menu');
  thirdLi.classList.add('drinks');
  fourthLi.classList.add('about');
  ul.appendChild(firstLi);
  ul.appendChild(secondLi);
  ul.appendChild(thirdLi);
  ul.appendChild(fourthLi);
  nav.appendChild(ul);
  return nav;
}

export { createNav };
