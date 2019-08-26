import 'styles/base.scss';

import name from 'lib/name';

const nameElement = document.querySelector('.name') || null;

switch(window.location.pathname) {
  case '/':
    nameElement.onclick = name;
    break;
}

if (document.title === '404!!') {
  let quietCounter = 0;

  nameElement.onclick = function () {
    quietCounter++;

    if (quietCounter === 10) {
      const quiet = new Audio('https://i.sallai.me/quiet.mp3');
      quiet.loop = true;
      quiet.play();
    }
  }
}
