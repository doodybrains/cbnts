import Velocity from 'velocity-animate';

export function duplicateFirstLastSlides(slider, firstSlide, lastSlide) {
  Velocity(slider, {translateX:'+=-12.5%'}, {duration: 350, easing: 'easeIn'});
  const firstClone = firstSlide.cloneNode(true);
  const lastClone = lastSlide.cloneNode(true);
  firstSlide.parentNode.insertBefore(lastClone, firstSlide);
  firstSlide.parentNode.appendChild(firstClone);
}
