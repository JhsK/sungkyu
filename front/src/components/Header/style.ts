import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type StickyContainerProps = {
  logoColor: boolean;
  headerPadding?: boolean;
  mainBool?: boolean;
};

type BackgroundProps = {
  isView: boolean;
};

export const StickyContainer = styled.div<StickyContainerProps>`
    position: ${(props) => (props.mainBool ? 'fixed;' : 'sticky;')}
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: ${(props) => props.logoColor && props.theme.PUBLIC_WHITE};
    padding: ${(props) => (props.headerPadding ? '0' : '1rem 0')};
  `;

export const Container = styled.div`
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

export const MotionContainer = styled(motion.div)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  @media ${(props) => props.theme.TABLET_SM} {
    display: block;
  }

  & > .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props: BackgroundProps) => (props.isView ? '' : '250px')};
    height: 100vh;
    background: #fff;
  }

  & > .hamberger {
    position: absolute;
    left: 40px;
    top: 35px;
    cursor: pointer;

    @media ${(props) => props.theme.MOBILE} {
      left: 10px;
    }
  }
`;
