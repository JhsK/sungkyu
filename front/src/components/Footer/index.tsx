import { GrLogin } from '@react-icons/all-files/gr/GrLogin';
import { GrLogout } from '@react-icons/all-files/gr/GrLogout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { logOut } from 'src/api';
import useAuth from 'src/hooks/useAuth';
import Logo from '../Header/Logo';
import { Content, ContentContainer, FooterContainer, Text } from './style';

const Footer = () => {
  const currentUser = useAuth();
  const router = useRouter();

  const onClickLogOut = async () => {
    await logOut();
    router.replace('/');
  };

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
              <GrLogout onClick={onClickLogOut} size={20} />
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
