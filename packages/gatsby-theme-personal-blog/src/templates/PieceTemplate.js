import React from 'react';

export default ({ children, className }) => (
  <div className={className}>{children.props.children}</div>
);
