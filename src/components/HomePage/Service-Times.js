import React from "react";
import { 
  Headline, 
  Section, 
  SubHeadline,
  TextWrapper,
  Body, 
  InternalLink,
  Button, 
  OutsideLink} from "../../styles";

export const ServiceTimes = () => {
  return(
    <Section SectionPadding>
      <TextWrapper
        R="1/2"
        C="2/14"
        TC="2/10"
        MC="2/6"
        CenteredWrapper
      >
        <Headline>We are excited to meet you</Headline>
        <SubHeadline>Join us Sundays at 10AM</SubHeadline>
        <Body>In-Person | <OutsideLink TextLink href="https://m.facebook.com/Thechurchinbrielle/?mibextid=LQQJ4d">Facebook Live</OutsideLink></Body>
        <Button><InternalLink to="/im-new/worship-service" ButtonPadding>Worship-Service</InternalLink></Button>
      </TextWrapper>
    </Section>
  )
}