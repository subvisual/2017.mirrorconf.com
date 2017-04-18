/* global document:false, window: false */

import _ from 'lodash';

export default class MouseAnimator {
  constructor() {
    this.layout = document.getElementsByClassName('Layout')[0];
    this.reflection = document.getElementsByClassName('Mirror-reflection')[0];
    this.scrollTimer = 0;
  }

  hook = () => {
    this.layout.addEventListener('mousemove', _.throttle(this.callback, 50));
    document.addEventListener('scroll', this.mouseEventsDisabler, false);
  }

  callback = (event) => {
    const mouseXRatio = event.clientX / window.innerWidth;
    const mouseYRatio = event.clientY / window.innerHeight;

    this.layout.style.setProperty('--color-background', this.currentColor(mouseXRatio));
    this.reflection.style.setProperty('--mirror-rotation-y', this.currentXRotation(mouseXRatio));
    this.reflection.style.setProperty('--mirror-rotation-x', this.currentYRotation(mouseYRatio));
  };

  mouseEventsDisabler = () => {
    clearTimeout(this.scrollTimer);
    this.addHoverClass();
    this.scrollTimer = setTimeout(this.removeHoverClass, 300);
  }

  addHoverClass = () => {
    document.body.classList.add('scrolling');
  }

  removeHoverClass = () => {
    document.body.classList.remove('scrolling');
  }

  currentColor(ratio) {
    const h = 227;
    const s = 78;
    const l = this.lerp(14, 18, ratio);

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  currentXRotation(ratio) {
    const degrees = this.lerp(-0.2, 0.2, ratio);

    return `${degrees}deg`;
  }

  currentYRotation(ratio) {
    const degrees = this.lerp(-0.02, 0.02, ratio);

    return `${degrees}deg`;
  }

  lerp = (value1, value2, amount) => value1 + ((value2 - value1) * amount);
}
