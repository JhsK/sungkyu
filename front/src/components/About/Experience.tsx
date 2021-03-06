import React from 'react';
import { lightTheme } from 'src/theme';
import { Container, Skill, SkillContainer } from './style';

const INSOMENIA_FREE = [
  { name: 'React', color: lightTheme.REACT_SKY_BLUE_COLOR },
  { name: 'Next.js', color: lightTheme.PUBLIC_BLACK },
  { name: 'TypeScript', color: lightTheme.PUBLIC_BLUE },
  { name: 'Node.js', color: lightTheme.NODE_GREEN_COLOR },
];

const INSOMENIA_INTERN = [
  { name: 'React', color: lightTheme.REACT_SKY_BLUE_COLOR },
  { name: 'Next.js', color: lightTheme.PUBLIC_BLACK },
  { name: 'TypeScript', color: lightTheme.PUBLIC_BLUE },
  { name: 'Ruby on Rails', color: lightTheme.ROR_RED_COLOR },
  { name: 'Framework7', color: lightTheme.F7_ORANGE_COLOR },
  { name: 'TailwindCSS', color: lightTheme.REACT_SKY_BLUE_COLOR },
];

const Experience = () => (
  <Container>
    <span className="title" role="img" aria-labelledby="expreience">
      ๐ผ Experience
    </span>
    <div className="experienceContainer" data-aos="flip-left">
      <span className="period">2022.01 ~ 2022.02</span>
      <div className="content">
        <div className="top">
          <h1>(์ฃผ) ์ธ์ธ๋์</h1>
          <span>์คํํธ์ ์ ๋ฌธ ์ธ์ฃผ ๊ฐ๋ฐ์ฌ์๋๋ค. ๊ณ ๊ฐ์ฌ ํ๋ก์ ํธ์ ์ฐธ์ฌํ์ฌ ๊ธฐ๋ฅ ๊ตฌํ์ ๋ด๋นํ์์ต๋๋ค.</span>
          <span>Full Stack Developer</span>
        </div>
        <SkillContainer>
          {INSOMENIA_FREE.map((skill) => (
            <Skill key={skill.name} bgColor={skill.color}>
              {skill.name}
            </Skill>
          ))}
        </SkillContainer>
        <ul className="project">
          <li>[๋ฐ๋ฆฌ์ฑ] ๋ด๊ฐ ์์ฃผ ๊ฐ๋ ์ง์ ์ ์ ํํ๊ณ  ํด๋น ์ง์ ์ ์ํ์ ํฝ์ํ  ์ ์๋๋ก ์์ฝ/์ฃผ๋ฌธ ์น์ฑ ๊ฐ๋ฐ</li>
          <ul className="task">
            <li>์ํ ๊ฒฐ์  ์ ์ฌ์ฉํ  ์ ์๋ ์ฟ ํฐ ๋ฐ ํฌ์ธํธ ๊ธฐ๋ฅ ๊ตฌํ</li>
            <li>๋ฆฌ๋ทฐ ๊ธฐ๋ฅ ๊ตฌํ</li>
            <li>ํ ์ค API๋ฅผ ์ด์ฉํ ์นด๋ ๋ฑ๋ก ํ ์๋๊ฒฐ์  ๊ธฐ๋ฅ ๊ตฌํ</li>
            <li>ํ ์ค API๋ฅผ ์ด์ฉํ ์นด๋ ๋ฑ๋ก ์์ด ์นด๋ ์ ๋ณด ๋ฐ ๊ฐํธ ๊ฒฐ์  ๊ธฐ๋ฅ ๊ตฌํ</li>
          </ul>
          <li>[๋ฐฐ๋ญ๋ฒ์ค] ์ฌํ์ ์ํ ๋ฒ์ค ์์ฝ ์๋น์ค ์น์ฑ ๊ฐ๋ฐ</li>
          <ul className="task">
            <li>ํ ์ค ์ง๊ธ๋ํ API๋ฅผ ์ด์ฉํ ๋ฒ์ค๊ธฐ์ฌ ์์ฝ๊ธ ์ ๋ฌ ๊ธฐ๋ฅ ๊ตฌํ</li>
          </ul>
        </ul>
      </div>
    </div>
    <div className="experienceContainer" data-aos="flip-left">
      <span className="period">2021.09 ~ 2022.12</span>
      <div className="content">
        <div className="top">
          <h1>ICT ํ์ ์ฐ๊ณ ํ๋ก์ ํธ ์ธํด์ฝ - (์ฃผ) ์ธ์ธ๋์</h1>
          <span>ICT ํ์ ์ฐ๊ณ ํ๋ก์ ํธ ์ธํด์ฝ์ ํตํด ์ธ์ธ๋์์์ 4๊ฐ์๋์ ์ธํด์ผ๋ก ์ฐธ์ฌํ์์ต๋๋ค.</span>
          <span>Full Stack Developer</span>
        </div>
        <SkillContainer>
          {INSOMENIA_INTERN.map((skill) => (
            <Skill bgColor={skill.color}>{skill.name}</Skill>
          ))}
        </SkillContainer>
        <ul className="project">
          <li>ํ์ฌ ๋ด ๊ธฐ์  ์คํ ์ ์์ ์ํ ์๊ฑฐ๋ ์น์ฑ ํ๋ก์ ํธ ์งํ(1๊ฐ์)</li>
          <li>์ค์  ๊ณ ๊ฐ์ฌ ํ๋ก์ ํธ ์๋ธ ๊ฐ๋ฐ์ ํฌ์(3๊ฐ์)</li>
          <ul className="task">
            <li>๊ธฐ๋ฅ ๊ตฌํ</li>
            <li>ํผ๋ธ๋ฆฌ์ฑ ๋ฐ ์ ์ง ๋ณด์ ์งํ</li>
          </ul>
        </ul>
      </div>
    </div>
  </Container>
);

export default Experience;
