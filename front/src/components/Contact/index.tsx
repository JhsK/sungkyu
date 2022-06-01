import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    border-radius: 9999px;
    margin-bottom: 1.5rem;
    object-fit: cover;

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
    <img src="profile.jpeg" alt="profile" />
    <span>임성규</span>
    <span>EMAIL - qwe6293@namte.com</span>
    <span>Github - https://github.com/JhsK</span>
  </Container>
);

export default ContactComponent;
