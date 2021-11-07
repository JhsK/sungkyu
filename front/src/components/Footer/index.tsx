import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { lightTheme } from 'src/theme';
import Logo from '../Header/Logo';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${lightTheme.BACKGROUND_PROJECTS_COLOR};
`;

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.div`
  margin-top: 2rem;
  padding-bottom: 1rem 0;
  font-size: 0.9rem;
  font-weight: bold;

  span {
    margin-right: 1rem;
  }

  a {
    color: black;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Content>
      <Logo />
      <Text>
        <span>임성규</span>
        <span>qwe6293@nate.com</span>
        <Link href="https://github.com/JhsK">
          <a>https://github.com/JhsK</a>
        </Link>
      </Text>
      <Text>
        <span>Copyright &copy; 2021 Sungkyu All Rights Reserved.</span>
      </Text>
    </Content>
  </FooterContainer>
);

export default Footer;
