import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Logo from './Logo';

type HeaderProps = {
  logoColor: boolean;
};

const StickyContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${(props) => props.color && '#fff'};
  padding-bottom: 1rem;
`;

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

const Header = ({ logoColor }: HeaderProps) => (
  <StickyContainer color={logoColor}>
    <Container>
      <Link href="/">
        <a>
          <Logo logoColor={logoColor} />
        </a>
      </Link>
      <div className="menu">
        <MenuLi>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </MenuLi>
      </div>
    </Container>
  </StickyContainer>
);

export default Header;
