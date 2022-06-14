import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }
`;

export const ProjectsContainer = styled.div`
  margin-bottom: 5rem;
  width: 100%;

  .titleContainer {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media ${(props) => props.theme.TABLET} {
      justify-content: center;
    }

    .icons {
      margin-right: 0.5rem;
    }

    .ProjectsTitle {
      font-size: 2rem;
      font-weight: bold;
      line-height: 3rem;
    }
  }

  .cardContainer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5rem;
    flex-wrap: wrap;

    @media ${(props) => props.theme.TABLET} {
      flex-wrap: nowrap;
      justify-content: center;
    }

    .card {
      width: 23%; /* 반응형으로 적용 필요 */
      height: 250px;
      border-radius: 15px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;

      @media ${(props) => props.theme.HDPC} {
        width: 28%;
      }

      @media ${(props) => props.theme.PC} {
        width: 40%;
      }

      @media ${(props) => props.theme.TABLET} {
        width: 250px;
      }

      @media ${(props) => props.theme.TABLET_SM} {
        width: 300px;
        margin: 0 auto;
      }

      @media ${(props) => props.theme.MOBILE_SM} {
        width: 300px;
      }

      @media ${(props) => props.theme.MOBILE_FOLD} {
        width: 200px;
      }

      a {
        position: relative;
        width: 100%;
        height: 150px;
        border-radius: 15px 15px 0 0;

        & > * {
          height: 150px !important;
          position: relative !important;
          border-radius: 15px 15px 0 0;
        }
      }

      .cardTitleContainer {
        padding: 1rem 0 0 1rem;

        span:nth-of-type(1) {
          display: block;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        span:nth-of-type(2) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const SwiperConatiner = styled.div`
  width: 100%;
`;
