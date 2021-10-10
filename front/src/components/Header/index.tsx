import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: flex-end;
  height: 80px;
`;

const MenuLi = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 2rem;
  }
`;

const Header = ({ logoColor }) => (
  <Container>
    <Logo logoColor={logoColor} />
    <div className="menu">
      <MenuLi>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </MenuLi>
    </div>
  </Container>
);

export default Header;
