import React, { Component } from 'react';

import '../css/Components/Mirror';

export default class Mirror extends Component {
  componentDidMount = () => {
    document.
      querySelectorAll('.Mirror-original [data-mirror-hover]').
      forEach(this.mirrorEventsOn);
    })
  }

  mirrorEventsOn = el => {
    const reflection = document.querySelector(`.Mirror-reflection [data-mirror-id=${el.dataset.mirrorId}`);

    el.addEventListener("mouseenter", (event) => {
      reflection.classList.add("hover")
    });

    el.addEventListener("mouseleave", (event) => {
      reflection.classList.remove("hover")
    });
  }

  render() {
    return <div className="Mirror">
      <div className="Mirror-original">
        {this.props.children}
      </div>
      <div className="Mirror-reflection">
        {this.props.children}
      </div>
    </div>;
  }
}
