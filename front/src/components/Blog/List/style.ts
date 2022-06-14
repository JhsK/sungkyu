import styled from '@emotion/styled';

export const Container = styled.div`
  width: 73%;
`;

export const CreateBtn = styled.div`
  margin-bottom: 1rem;
`;

export const LableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media ${(props) => props.theme.MOBILE} {
    justify-content: center;
  }

  .filter {
    span {
      margin-right: 1.5rem;
      font-weight: 800;
      font-size: 1rem;
      cursor: pointer;
    }

    @media ${(props) => props.theme.MOBILE} {
      margin-bottom: 1rem;
    }
  }

  @media ${(props) => props.theme.MOBILE} {
    flex-wrap: wrap;
  }
`;

export const Newest = styled.span`
  color: ${(props) => (props.color === '최신순' ? props.theme.PUBLIC_BLACK : props.theme.NO_ACTIVE_CATEGORY_COLOR)};
`;

export const Latest = styled.span`
  color: ${(props) => (props.color === '후순위' ? props.theme.PUBLIC_BLACK : props.theme.NO_ACTIVE_CATEGORY_COLOR)};
`;

export const All = styled.span`
  color: ${(props) => (props.color === 'All' ? props.theme.PUBLIC_BLACK : props.theme.NO_ACTIVE_CATEGORY_COLOR)};
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 170px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: box-shadow 0.3s ease 0s, border-color 0.3s ease 0s;

  &:hover {
    box-shadow: 4px 4px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .nextImage {
    position: relative;
    width: 30%;
    height: 100%;

    @media ${(props) => props.theme.MOBILE} {
      width: 45%;
    }

    @media ${(props) => props.theme.MOBILE_SM} {
      width: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 65%;
  padding-right: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media ${(props) => props.theme.MOBILE} {
    width: 50%;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    display: none;
  }

  .content {
    @media ${(props) => props.theme.PC} {
      font-size: 0.9rem;
    }
  }

  & > div {
    line-height: 1.5rem;
  }
`;

export const PostTitle = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.3rem;

  @media ${(props) => props.theme.MOBILE} {
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    margin-top: 0.7rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.POST_EDIT_TITLE_BORDER_COLOR};
    margin-right: 0.8rem;
  }
`;

export const Hr = styled.hr`
  opacity: 0.2;
  margin: 1.5rem 0;

  @media ${(props) => props.theme.MOBILE_SM} {
    margin: 3rem 0;
  }
`;
