import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { motion, useCycle } from 'framer-motion';
import useDevice from 'src/hooks/useDevice';
import { useRouter } from 'next/router';
import Logo from './Logo';
import MenuItem from './MenuItem';

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

type BackgroundProps = {
  isView: boolean;
};

const StickyContainer = styled.div<StickyContainerProps>`
  position: ${(props) => (props.mainBool ? 'fixed;' : 'sticky;')}
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) => props.logoColor && props.theme.PUBLIC_WHITE};
  padding: ${(props) => (props.headerPadding ? '0' : '1rem 0')};
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: flex-end;
  height: 60px;

  & > span {
    cursor: pointer;
  }

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    justify-content: center;
  }
`;

const MotionContainer = styled(motion.div)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  @media ${(props) => props.theme.TABLET_SM} {
    display: block;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props: BackgroundProps) => (props.isView ? '' : '250px')};
    height: 100vh;
    background: #fff;
  }

  .hamberger {
    position: absolute;
    left: 40px;
    top: 35px;
    cursor: pointer;

    @media ${(props) => props.theme.MOBILE} {
      left: 10px;
    }
  }
`;

const Header = ({ logoColor, logoSize, headerPadding = false, mainBool }: HeaderProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isMobile = useDevice(650);
  const router = useRouter();

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const onClickLogo = () => router.push('/');

  return (
    <StickyContainer mainBool={mainBool} logoColor={logoColor} headerPadding={headerPadding}>
      <Container>
        <span onClick={onClickLogo}>
          <Logo size={logoSize} logoColor={logoColor} />
        </span>
        <MenuItem isMobile={isMobile} />
        <MotionContainer isView={!isOpen} initial={false} animate={isOpen ? 'open' : 'closed'}>
          <motion.div className="background" variants={sidebar}>
            <MenuItem isMobile={!isMobile} isOpen={isOpen} />
          </motion.div>
          <div className="hamberger" onClick={() => toggleOpen()}>
            <GiHamburgerMenu size="1.5rem" />
          </div>
        </MotionContainer>
      </Container>
    </StickyContainer>
  );
};

export default Header;
