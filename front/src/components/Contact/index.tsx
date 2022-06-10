import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .contactImg {
    position: relative;
    width: 300px;
    height: 300px;
    margin-bottom: 1.5rem;

    & > * {
      border-radius: 9999px;
    }

    @media ${(props) => props.theme.MOBILE_FOLD} {
      width: 200px;
      height: 200px;
    }
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media ${(props) => props.theme.MOBILE_FOLD} {
      font-size: 1rem;
    }
  }
`;

const ContactComponent = () => (
  <Container>
    <span className="contactImg">
      <Image layout="fill" alt="profile" objectFit="cover" src="/profile.jpeg" />
    </span>
    <span>임성규</span>
    <span>EMAIL - qwe6293@namte.com</span>
    <span>Github - https://github.com/JhsK</span>
  </Container>
);

export default ContactComponent;
