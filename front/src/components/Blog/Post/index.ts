import styled from '@emotion/styled';

export const Container = styled.div`
  /* margin-top: 7rem; */
  padding: 0 2rem;
`;
export const TitleInput = styled.input`
  height: 80px;
  width: 50%;
  border: none;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.POST_EDIT_TITLE_BORDER_COLOR};
  font-size: 1.7rem;
  display: block;

  &:focus {
    outline: none;
  }
`;

export const TagInput = styled.input`
  height: 40px;
  width: 50%;
  border: none;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const TagValue = styled.span`
  padding: 0.3rem 0.5rem;
  color: ${(props) => props.theme.POST_EDIT_BUTTON_COLOR};
  background-color: ${(props) => props.theme.POST_EDIT_TITLE_BORDER_COLOR};
  border-radius: 10px;
  margin-right: 0.5rem;
`;

export const BtnContainer = styled.div`
  text-align: right;
  margin-top: 2rem;
  padding-bottom: 2rem;

  button {
    width: 100px;
    height: 50px;
    border-radius: 8px;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
  }

  button:nth-of-type(1) {
    background-color: ${(props) => props.theme.POST_EDIT_BUTTON_COLOR};
    color: ${(props) => props.theme.BACKGROUND_INTRO_COLOR};
  }

  button:nth-of-type(2) {
    margin-left: 1rem;
  }
`;
