

window.addEventListener('DOMContentLoaded', function () {
  const tl = gsap.timeline({ onReverseComplete: reverseFunction });

  tl.from('.menu__top', { y: -20, opacity: 0 });
  tl.fromTo('.menu__left', { y: 20, opacity: 0}, { y: 0, opacity: 1});
  tl.from('.menu__right', { y: 40, opacity: 0, delay: .3});
  tl.reverse();
 function reverseFunction(){
  document.querySelector('#menu').classList.toggle('menu--open');
}

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('menu--open');
    if (!tl.reversed()) {
      tl.reverse(0);
    } else {
      tl.play();
    }
  })

  document.querySelector('#close').addEventListener('click', function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse(0);
    }

    });
    gsap.from('.hero__btn', 1, { y: 70, opacity: 0, delay: .5});
    gsap.from('.hero__title', 1, { y: 30, opacity: 0, delay: .5});
    gsap.fromTo('.hero__descr, .photos-wrap img:first-child', { opacity: 0, delay: .9 }, { opacity: 1, delay: .9 });
    gsap.fromTo('.photos-wrap img:nth-child(2)', { opacity: 0, delay: 1.2 }, { opacity: 1, delay: 1.2 });
    gsap.fromTo('.photos-wrap img:nth-child(3), .photos__author', { opacity: 0, delay: 1.2 }, { opacity: 1, delay: 1.4 });

})
