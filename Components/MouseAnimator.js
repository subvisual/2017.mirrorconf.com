/* global document:false, window: false */

import _ from 'lodash';

export default class MouseAnimator {
  hook = () => {
    const layout = document.getElementsByClassName('Layout')[0];
    const reflection = document.getElementsByClassName('Mirror-reflection')[0];

    const callback = (event) => {
      const mouseXRatio = event.clientX / window.innerWidth;
      const mouseYRatio = event.clientY / window.innerHeight;

      layout.style.setProperty('--color-background', this.currentColor(mouseXRatio));
      reflection.style.setProperty('--mirror-rotation-y', this.currentXRotation(mouseXRatio));
      reflection.style.setProperty('--mirror-rotation-x', this.currentYRotation(mouseYRatio));
    };

    layout.addEventListener('mousemove', _.throttle(callback, 50));
  }

  currentColor(ratio) {
    const h = 227;
    const s = 78;
    const l = this.lerp(14, 18, ratio);

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  currentXRotation(ratio) {
    const degrees = this.lerp(-0.5, 0.5, ratio);

    return `${degrees}deg`;
  }

  currentYRotation(ratio) {
    const degrees = this.lerp(-0.2, 0.2, ratio);

    return `${degrees}deg`;
  }

  lerp = (value1, value2, amount) => value1 + ((value2 - value1) * amount);
}
