import React from 'react';
import styled from 'styled-components';
import LinkWapper from '../components/LinkWapper';

const Link = (props) => {
  return (
    <div>
      <LinkWapper>No Styled, boring Link</LinkWapper>
      <br />
      {/* <StyledLink>Styled, excting Link</StyledLink> */}
    </div>
  );
};

export default Link;

// const StyledLink = styled(LinkWapper)`
//   color: palevioletred;
//   font-weight: bold;
// `;
