import styled from '@emotion/styled';

interface SkillProps {
  bgColor: string;
}

export const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 3rem 0;
`;

export const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Skill = styled.span<SkillProps>`
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  color: ${(props) => props.theme.PUBLIC_WHITE};
  padding: 0.4rem;
  margin-right: 0.3rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.bgColor};
  width: auto;
  border-radius: 5px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  .title {
    font-weight: bold;
    font-size: 1.4rem;

    @media ${(props) => props.theme.TABLET_SM} {
      padding: 0 2rem;
    }
  }

  .experienceContainer {
    padding: 1rem 2rem;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;

    @media ${(props) => props.theme.TABLET_SM} {
      display: flex;
      flex-direction: column;
    }

    @media ${(props) => props.theme.MOBILE} {
      gap: 1rem;
    }

    .period {
      font-size: 1.4rem;
      font-weight: bold;
      color: ${(props) => props.theme.NO_ACTIVE_CATEGORY_COLOR};

      @media ${(props) => props.theme.MOBILE} {
        font-size: 1.2rem;
      }
    }

    .content {
      @media ${(props) => props.theme.MOBILE} {
        ul {
          font-size: 0.9rem;
        }
      }
      .top {
        margin-bottom: 1rem;

        @media ${(props) => props.theme.MOBILE} {
          font-size: 0.9rem;
        }
        h1 {
          font-size: 1.4rem;
          margin-bottom: 1rem;

          @media ${(props) => props.theme.MOBILE} {
            font-size: 1.2rem;
          }
        }

        span {
          opacity: 0.5;
          margin-bottom: 0.5rem;
          display: block;
        }
      }

      .project {
        padding-left: 1.5rem;
        margin: 1rem 0;

        li {
          list-style-type: disc;
          margin-bottom: 1rem;
          line-height: 1.2rem;
        }
      }

      .task {
        padding-left: 1rem;

        li {
          list-style-type: circle;
        }
      }
    }
  }
`;
