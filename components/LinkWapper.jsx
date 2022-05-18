import React from 'react';

const LinkWapper = (props) => {
  const { children, className } = props;

  return <a className={className}>{children}</a>;
};

export default LinkWapper;
