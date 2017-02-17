import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Headroom from 'react-headroom';
import { prefixLink } from 'gatsby-helpers';

import '../css/reset';
import '../css/markdown-styles';
import '../css/Components/Layout';

import Navbar from '../Components/Navbar';

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <div className="Layout">
      <Headroom>
        <nav className="Layout-navbar">
          <Navbar/>
        </nav>
      </Headroom>

      <div className="Layout-content">
        {this.props.children}
      </div>
    </div>;
  }
}
