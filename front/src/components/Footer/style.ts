import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.FOOTER_GRAY};
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.PUBLIC_BLACK};

  & > span {
    margin-right: 1rem;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    font-size: 0.7rem;
  }
`;
