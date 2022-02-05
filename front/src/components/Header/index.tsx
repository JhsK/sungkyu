import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Logo from './Logo';

type HeaderProps = {
  logoColor: boolean;
  logoSize?: number;
  headerPadding?: boolean;
  mainBool?: boolean;
};

type StickyContainerProps = {
  logoColor: boolean;
  headerPadding?: boolean;
  mainBool?: boolean;
};

const StickyContainer = styled.div<StickyContainerProps>`
  // position: fixed;
  position: ${(props) => (props.mainBool ? 'fixed;' : 'sticky;')}
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) => props.logoColor && props.theme.PUBLIC_WHITE};
  padding: ${(props) => (props.headerPadding ? '0' : '1rem 0')};
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: flex-end;
  height: 60px;
`;

const MenuLi = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 2rem;
  }
`;

const Header = ({ logoColor, logoSize, headerPadding = false, mainBool }: HeaderProps) => (
  <StickyContainer mainBool={mainBool} logoColor={logoColor} headerPadding={headerPadding}>
    <Container>
      <Link href="/">
        <a>
          <Logo size={logoSize} logoColor={logoColor} />
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
