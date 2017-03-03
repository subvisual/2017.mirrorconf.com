import _ from "lodash";

export default class MouseAnimator {
  constructor() {
  }

  hook = () => {
    const body = document.getElementsByClassName("Layout")[0];

    const callback = (event) => {
      const mouseXRatio = event.clientX / body.clientWidth;

      body.style.setProperty("--color-background", this.currentColor(mouseXRatio));
    }

    body.addEventListener('mousemove', _.throttle(callback, 50));
  }

  currentColor(ratio) {
    const h = 227;
    const s = this.lerp(78, 76, ratio);
    const l = this.lerp(14, 22, ratio);

    return `hsl(${h}, ${s}%, ${l}%)`
  }

  lerp = (value1, value2, amount) => {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  }
}
