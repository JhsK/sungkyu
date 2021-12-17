import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    border-radius: 9999px;
    margin-bottom: 1.5rem;
    object-fit: cover;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
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
