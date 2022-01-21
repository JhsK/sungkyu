import styled from '@emotion/styled';
import router from 'next/router';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from 'src/api';
import Footer from 'src/components/Footer';
import { Button, Form, FormContainer } from 'src/components/Form';
import Header from 'src/components/Header';
import { JoinInput } from 'src/constant';
import useAuth from 'src/hooks/useAuth';

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

const validationMessage = {
  required: '필수 항목입니다',
  email: '이메일 형식에 맞춰주세요',
  passwordConfirmation: '비밀번호가 동일하지 않습니다',
};

const Sign_up = () => {
  const currentUser = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<JoinInput>();
  const onSubmit: SubmitHandler<JoinInput> = async (data: JoinInput) => {
    if (data.password !== data.password_confirmation) {
      setError('password', { message: validationMessage.passwordConfirmation }, { shouldFocus: true });
    }
    try {
      await signUp(data);
      toast.success('회원가입에 성공 했습니다!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.replace('/user/sign_in');
      }, 1000);
    } catch (error) {
      console.log(errors);
    }
  };

  useEffect(() => {
    if (currentUser?.isAuthenticated) {
      toast.error('이미 로그인 상태입니다', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Header logoColor />
      <Page>
        <Container>
          <h1>회원가입</h1>
          <FormContainer size={500}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">이메일</label>
                <input
                  {...register('email', {
                    required: validationMessage.required,
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                      message: validationMessage.email,
                    },
                  })}
                  type="text"
                />
                <span>{errors?.email?.message}</span>
              </div>
              <div>
                <label htmlFor="username">이름</label>
                <input
                  {...register('username', {
                    required: validationMessage.required,
                  })}
                  type="text"
                />
                <span>{errors?.username?.message}</span>
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input
                  {...register('password', {
                    required: validationMessage.required,
                  })}
                  type="password"
                />
                <span>{errors?.password?.message}</span>
              </div>
              <div>
                <label htmlFor="password_confirmation">비밀번호 확인</label>
                <input
                  {...register('password_confirmation', {
                    required: validationMessage.required,
                  })}
                  type="password"
                />
                <span>{errors?.password_confirmation?.message}</span>
              </div>
              <Button borderNone submitType>
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

export default Sign_up;
