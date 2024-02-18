


  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  const hero = document.querySelector('#hero-2');
  const concept = document.querySelector('#concept');
  const service = document.querySelector('#services');
  const gallery = document.querySelector('#gallery');

  const keyframes = {
    opacity: [0, 1],
    rotate: ['x 360deg', 0]
  };
  const options = {
    duration: 3000,
    easing: 'ease',
    fill: 'backwards'
  };
  hero.animate(keyframes, options);
  concept.animate(keyframes, options);
  service.animate(keyframes, options);
  gallery.animate(keyframes, options);


// new LuminousGallery(document.querySelectorAll('.grid-gallery'));

new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

AOS.init({
  duration: 1000
});
