import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import htmlIcon from '../../../public/skill/html.png';
import cssIcon from '../../../public/skill/css.png';
import javascriptIcon from '../../../public/skill/javascript.png';
import typescriptIcon from '../../../public/skill/typescript.png';
import reactIcon from '../../../public/skill/react.png';
import reduxIcon from '../../../public/skill/redux.png';
import tailwindIcon from '../../../public/skill/tailwind.png';
import eslintIcon from '../../../public/skill/eslint.png';
import preitterIcon from '../../../public/skill/preitter.png';
import nodeIcon from '../../../public/skill/nodejs.png';
import expressIcon from '../../../public/skill/expressjs.png';
import sequelizeIcon from '../../../public/skill/sequelize.png';
import mysqlIcon from '../../../public/skill/mysql.png';
import gitIcon from '../../../public/skill/git.png';
import notionIcon from '../../../public/skill/notion.png';
import slackIcon from '../../../public/skill/slack.png';
import vscodeIcon from '../../../public/skill/vscode.png';

const FRONT_SKILL_ONE = [
  { icon: htmlIcon, title: 'HTML5' },
  { icon: cssIcon, title: 'CSS3' },
  { icon: javascriptIcon, title: 'JavaScript' },
  { icon: typescriptIcon, title: 'TypeScript' },
  { icon: reactIcon, title: 'React' },
  { icon: reduxIcon, title: 'Redux' },
] as const;
const FRONT_SKILL_TWO = [{ icon: tailwindIcon, title: 'TailWindCSS' }] as const;
const FRONT_SKILL_THREE = [
  { icon: eslintIcon, title: 'ESLint' },
  { icon: preitterIcon, title: 'Preitter' },
] as const;

const BACK_SKILL_ONE = [
  { icon: nodeIcon, title: 'Node.js' },
  { icon: expressIcon, title: 'Express' },
  { icon: sequelizeIcon, title: 'Sequelize' },
  { icon: mysqlIcon, title: 'MySQL' },
] as const;

const TOOL_SKILL_ONE = [
  { icon: vscodeIcon, title: 'VSCode' },
  { icon: gitIcon, title: 'Git' },
  { icon: slackIcon, title: 'Slack' },
  { icon: notionIcon, title: 'Notion' },
] as const;

const FRONT_SKILL = [FRONT_SKILL_ONE, FRONT_SKILL_TWO, FRONT_SKILL_THREE] as const;

const SkillContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 2rem;

  span {
    display: block;
  }

  .title {
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .subTitle {
    font-size: 1rem;
    font-weight: bold;
    padding-left: 0.3rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16.5%;

  span {
    font-weight: bold;
    margin-top: 0.4rem;
  }
`;

const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  padding-left: 0.3rem;
  margin-top: 6rem;
`;

const Skill = () => (
  <SkillContainer>
    <span className="title" role="img" aria-labelledby="hamer">
      🔨 Skills
    </span>
    <span className="subTitle">Front-end</span>
    {FRONT_SKILL.map((field, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <IconContainer key={index}>
        {field.map((image, i) => (
          <Skills key={image.title}>
            <Image src={image.icon} alt="front-end skill" />
            <span>{image.title}</span>
          </Skills>
        ))}
      </IconContainer>
    ))}
    <SubTitle>Back-end</SubTitle>
    <IconContainer>
      {BACK_SKILL_ONE.map((image) => (
        <Skills key={image.title}>
          <Image src={image.icon} alt="front-end skill" />
          <span>{image.title}</span>
        </Skills>
      ))}
    </IconContainer>
    <SubTitle>Collaboration & Tools</SubTitle>
    <IconContainer>
      {TOOL_SKILL_ONE.map((image) => (
        <Skills key={image.title}>
          <Image src={image.icon} alt="front-end skill" />
          <span>{image.title}</span>
        </Skills>
      ))}
    </IconContainer>
  </SkillContainer>
);

export default Skill;
