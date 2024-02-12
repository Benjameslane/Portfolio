import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Discover how my unique blend of skills and projects can drive innovation and success in your team. This portfolio is more than a showcase; it's a testament to my dedication to excellence in development. Through each project, I demonstrate not only my technical abilities but also my capacity for creative problem-solving and adaptability. I'm committed to delivering value and achieving outstanding results. Let's explore how my expertise can contribute to the growth and success of your organization.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Benjameslane?tab=repositories'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;