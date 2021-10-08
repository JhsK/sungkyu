import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: flex-end;

  & {
    padding: 0 2rem;
  }
`;

const MenuLi = styled.ul`
  list-style: none;
  display: flex;
`;

const Header = () => (
  <Container>
    <Logo />
    <MenuLi>
      <li>ABOUT</li>
      <li>PROJECTS</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </MenuLi>
  </Container>
);

export default Header;
