import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GrLogin } from '@react-icons/all-files/gr/GrLogin';
import { GrLogout } from '@react-icons/all-files/gr/GrLogout';
import { logOut } from 'src/api';
import useAuth from 'src/hooks/useAuth';
import Logo from '../Header/Logo';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.FOOTER_GRAY};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem 0;
  font-size: 0.9rem;
  font-weight: bold;

  span {
    margin-right: 1rem;
  }

  a {
    color: black;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  const currentUser = useAuth();
  const router = useRouter();

  return (
    <FooterContainer>
      <ContentContainer>
        <Content>
          <Logo logoColor height={30} width={100} />
          <Text>
            <span>임성규</span>
            <span>qwe6293@nate.com</span>
            <Link href="https://github.com/JhsK">
              <a>https://github.com/JhsK</a>
            </Link>
          </Text>
          <Text>
            <span>Copyright &copy; 2021 Sungkyu All Rights Reserved.</span>
            {currentUser?.isAuthenticated ? (
              <GrLogout
                onClick={async () => {
                  await logOut();
                  router.replace('/');
                }}
                size={20}
              />
            ) : (
              <GrLogin
                onClick={() => {
                  router.push('/user/sign_in');
                }}
                size={20}
              />
            )}
          </Text>
        </Content>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
