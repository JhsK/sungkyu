import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { motion, useCycle } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import useDevice from 'src/hooks/useDevice';
import Logo from './Logo';
import MenuItem from './MenuItem';
import { Container, MotionContainer, StickyContainer } from './style';

type HeaderProps = {
  logoColor: boolean;
  logoSize?: number;
  headerPadding?: boolean;
  mainBool?: boolean;
};

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

  return (
    <StickyContainer mainBool={mainBool} logoColor={logoColor} headerPadding={headerPadding}>
      <Container>
        <span onClick={() => router.push('/')}>
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
