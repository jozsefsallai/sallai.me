let timeout = null;

function name() {
  if (timeout) {
    clearTimeout(timeout);
  }

  const target = document.querySelector('.name');
  const nameAudio = new Audio('https://i.sallai.me/assets/name.mp3');
  nameAudio.play();

  const nameInner = target.querySelector('.name-inner');
  nameInner.innerHTML = 'jo:ʒɛf ʃɒllɒi';

  timeout = setTimeout(function () {
    nameInner.innerHTML = 'József Sallai';
  }, 3000);
}

export default name;
