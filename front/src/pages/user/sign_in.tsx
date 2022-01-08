import React from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Form, FormContainer } from 'src/components/Form';

interface JoinInput {
  email: string;
  password: string;
  password_confirmation: string;
  username: string;
}

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.BACKGROUND_USER_COLOR};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Sign_in = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<JoinInput>();
  const onSubmit: SubmitHandler<JoinInput> = (data) => console.log(data);

  return (
    <>
      <Header logoColor />
      <Page>
        <Container onSubmit={handleSubmit(onSubmit)}>
          <h1>로그인</h1>
          <FormContainer size={330}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">이메일</label>
                <input name="email" type="text" />
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input name="password" type="password" />
              </div>
              <Button borderNone submitType>
                로그인
              </Button>
              <Button borderNone={false} submitType={false}>
                회원가입
              </Button>
            </Form>
          </FormContainer>
        </Container>
      </Page>
      <Footer />
    </>
  );
};

export default Sign_in;
