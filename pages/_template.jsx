import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Headroom from 'react-headroom'
import { prefixLink } from 'gatsby-helpers'

import '../css/markdown-styles'

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <div className="Layout">
      <Headroom>
      </Headroom>

      {this.props.children}
    </div>
  }
}
