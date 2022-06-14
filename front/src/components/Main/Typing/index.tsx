import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MouseScrollAni from 'src/components/share/MouseScrollAni';
import { Container, Content, H1, Section } from './style';

interface TypingProps {
  setLogoColor: React.Dispatch<React.SetStateAction<boolean>>;
}

const Typing = ({ setLogoColor }: TypingProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    initialInView: true,
  });

  useEffect(() => {
    setLogoColor(!inView);
  }, [inView]);

  return (
    <Container>
      <Section>
        <Content ref={ref}>
          <h1>저는</h1>
          <H1>불편함을 해소하기 위해 고민하는</H1>
          <h1>개발자 입니다.</h1>
        </Content>
        <MouseScrollAni />
      </Section>
    </Container>
  );
};

export default Typing;
