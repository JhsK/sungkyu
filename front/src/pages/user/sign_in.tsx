import React from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Form, FormContainer } from 'src/components/Form';
import { signIn } from 'src/api';
import router from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';

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
  const onSubmit: SubmitHandler<JoinInput> = async (data) => {
    try {
      const { data: loginData } = await signIn(data);
      toast.success('로그인에 성공 했습니다!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push('/user/sign_in');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Header logoColor />
      <Page>
        <Container onSubmit={handleSubmit(onSubmit)}>
          <h1>로그인</h1>
          <FormContainer size={330}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">이메일</label>
                <input {...register('email')} name="email" type="text" />
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input {...register('password')} name="password" type="password" />
              </div>
              <Button borderNone submitType>
                로그인
              </Button>
              <Button borderNone={false} submitType={false}>
                <Link href="/user/sign_up">
                  <a>회원가입</a>
                </Link>
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
