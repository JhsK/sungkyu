import React from 'react';
import styled from '@emotion/styled';
import { GrGroup } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 1200px;
  margin: 9rem auto 0 auto;
`;

const ProjectsContainer = styled.div`
  margin-bottom: 5rem;

  .titleContainer {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .card {
      width: 23%; /* 반응형으로 적용 필요 */
      height: 330px;
      border-radius: 15px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;

      img {
        width: 100%;
        height: 170px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
      }

      .cardTitleContainer {
        padding: 1rem 0 0 1rem;

        span:nth-child(1) {
          display: block;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }
        span:nth-child(2) {
          font-size: 1rem;
        }
      }
    }
  }
`;

const tmp = [1, 2, 3, 4];

const ProjectsComponent = () => (
  <Container>
    <ProjectsContainer>
      <div className="titleContainer">
        <BsPerson size="40" className="icons" />
        <span className="ProjectsTitle">개인 프로젝트</span>
      </div>
      <div className="cardContainer">
        {tmp.map((item) => (
          <motion.div
            className="card"
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: '100%',
            }}
          >
            <img src="test.jpg" alt="cover" />
            <div className="cardTitleContainer">
              <span>title</span>
              <span>content</span>
            </div>
          </motion.div>
        ))}
      </div>
    </ProjectsContainer>
    <ProjectsContainer>
      <div className="titleContainer">
        <GrGroup size="40" className="icons" />
        <span className="ProjectsTitle">팀 프로젝트</span>
      </div>
      <div className="cardContainer">
        {tmp.map((item) => (
          <motion.div
            className="card"
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: '100%',
            }}
          >
            <img src="test.jpg" alt="cover" />
            <div className="cardTitleContainer">
              <span>title</span>
              <span>content</span>
            </div>
          </motion.div>
        ))}
      </div>
    </ProjectsContainer>
  </Container>
);

export default ProjectsComponent;
