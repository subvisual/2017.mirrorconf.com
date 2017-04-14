import React, { PropTypes } from 'react';

import '../css/Components/Mirror';

const Mirror = ({ children }) => (
  <div className="Mirror">
    <div className="Mirror-original">
      {children}
    </div>
    <div className="Mirror-container">
      <div className="Mirror-cut" />
      <div className="Mirror-reflection">
        {children}
      </div>
    </div>
  </div>
);

Mirror.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mirror;
