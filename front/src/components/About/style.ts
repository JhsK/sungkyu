import styled from '@emotion/styled';

interface SkillProps {
  bgColor: string;
}

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
