import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

type MenuContainerProps = {
  view: boolean;
  isMobile: boolean;
};

const MenuContainer = styled.div<MenuContainerProps>`
  display: ${(props) => (props.isMobile ? 'none' : 'block')};
  @media ${(props) => props.theme.TABLET_SM} {
    display: ${(props) => (props.view ? 'block' : 'none')};
    position: absolute;
    top: 100px;
    left: 10px;
  }
`;

const MenuLi = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.TABLET_SM} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    li {
      margin-bottom: 3rem;
    }
  }

  li {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 2rem;
  }
`;

const MenuItem = ({ isOpen = false, isMobile }) => (
  <MenuContainer isMobile={isMobile} view={!!isOpen}>
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
  </MenuContainer>
);

export default MenuItem;
