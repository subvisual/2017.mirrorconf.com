/* global document:false, window: false */

import _ from 'lodash';

export default class MouseAnimator {
  hook = () => {
    const layout = document.getElementsByClassName('Layout')[0];

    const callback = (event) => {
      const mouseXRatio = event.clientX / window.innerWidth;

      layout.style.setProperty('--color-background', this.currentColor(mouseXRatio));
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
    const degrees = this.lerp(-0.2, 0.2, ratio);

    return `${degrees}deg`;
  }

  lerp = (value1, value2, amount) => value1 + ((value2 - value1) * amount);
}
