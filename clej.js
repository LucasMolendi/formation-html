document.addEventListener('keydown', function(event) {
  const box = document.querySelector('.movable-box');
  const step = 10;

  const currentTop = parseInt(box.style.top, 10) || 0;
  const currentLeft = parseInt(box.style.left, 10) || 0;

  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
  }

  switch (event.key) {
      case 'ArrowUp':
          box.style.top = `${currentTop - step}px`;
          break;
      case 'ArrowDown':
          box.style.top = `${currentTop + step}px`;
          break;
      case 'ArrowLeft':
          box.style.left = `${currentLeft - step}px`;
          break;
      case 'ArrowRight':
          box.style.left = `${currentLeft + step}px`;
          break;
  }
});

let criocelot = new Audio("ocelot.mp3");

criocelot.play();