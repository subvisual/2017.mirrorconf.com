import React, { PropTypes } from 'react';

import '../css/Components/Mirror';

const Mirror = ({ children }) => (
  <div className="Mirror">
    <div className="Mirror-original">
      {children}
    </div>
    <div aria-hidden="true" className="Mirror-reflection">
      {children}
    </div>
  </div>
);

Mirror.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mirror;
