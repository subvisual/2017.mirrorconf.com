import React, { PropTypes } from 'react';

import '../css/reset';
import '../css/markdown-styles';
import '../css/Components/Layout';

import Navbar from '../Components/Navbar';
import Mirror from '../Components/Mirror';

const Template = ({ children }) => (
  <div className="Layout">
    <Mirror>
      <nav className="Layout-navbar">
        <Navbar />
      </nav>

      <div className="Layout-content">
        {children}
      </div>
    </Mirror>
  </div>
);

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
