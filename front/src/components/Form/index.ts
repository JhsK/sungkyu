import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface FormSizeProps {
  size: number;
}

export const FormContainer = styled.div`
  width: 400px;
  height: ${(props: FormSizeProps) => `${props.size}px`};
  border-radius: 15px;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.FONT_COLOR_WHITE};
`;

export const Form = styled.form`
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  label {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.FONT_COLOR_DARKGRAY};
  }

  span {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: red;
  }
`;

interface FormButtonProps {
  theme?: Theme;
  submitType: boolean;
  borderNone: boolean;
}

export const Button = styled.button`
  width: 100%;
  height: 36px;
  margin-bottom: 0.3rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: ${(props) => (props.borderNone ? 'none' : `1px solide ${props.theme.PUBLIC_BLACK}`)}
  font-size: 0.9rem;
  cursor: pointer;
  background-color: ${(props: FormButtonProps) =>
    props.submitType ? props.theme.PUBLIC_BLACK : props.theme.FONT_COLOR_WHITE};
  color: ${(props: FormButtonProps) => (props.submitType ? props.theme.FONT_COLOR_WHITE : props.theme.PUBLIC_BLACK)};
`;
