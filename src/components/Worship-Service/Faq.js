import React from "react";
//Accordion Component Import
import { AccordionComponent } from "./Accordion-Component"; 
//Styled Components
import { 
  Section,
  TextWrapper,
  Headline, 
  } from "../../styles";


export const Faq = () => {
  return(
    <Section WorshipService className="Faq">
      <TextWrapper
        R="1/2"
        C="2/14"
        TR="1/2"
        TC="2/10"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="center"
      >
        <Headline AltColor>FAQ</Headline>
      </TextWrapper>
      <AccordionComponent/>
    </Section>
  )
}