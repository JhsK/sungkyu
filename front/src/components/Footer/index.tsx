import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { GrLogin, GrLogout } from 'react-icons/gr';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { currentUserSelector, currentUserState } from 'src/atom';
import { logOut } from 'src/api';
import { toast } from 'react-toastify';
import Logo from '../Header/Logo';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.BACKGROUND_PROJECTS_COLOR};
`;

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
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
`;

const Footer = () => {
  const currentUser = useRecoilValueLoadable(currentUserSelector);
  const router = useRouter();

  return (
    <FooterContainer>
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
          {currentUser?.contents?.isAuthenticated ? (
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
    </FooterContainer>
  );
};

export default Footer;
