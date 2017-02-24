import React, { PropTypes } from 'react';

import '../css/reset';
import '../css/markdown-styles';
import '../css/Components/Layout';

import Navbar from '../Components/Navbar';
import Mirror from '../Components/Mirror';
import Mirrored from '../Components/Mirrored';

const Template = ({ children }) => (
  <div className="Layout">
    <Mirror>
      <Mirrored disbled>
        <nav className="Layout-navbar">
          <Navbar />
        </nav>
      </Mirrored>

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
