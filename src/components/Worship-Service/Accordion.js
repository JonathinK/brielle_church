import React, { useState, useRef } from 'react';
//On click outside Hook
import useOnClickOutside from '../../hooks/useOnClickOutside';
//Style Imports
import { 
  AccordionButton, 
  AccordionIcon, 
  AccordionTextWrapper, 
  Body,
  SubHeadline, 
  SubTitle } from '../../styles';


export const Accordion = (props) => {
  const [accordionOpen,setAccordionOpen] = useState(false);

  const showAccordion = () => setAccordionOpen(!accordionOpen);

  const closeAccordion = useRef(null);

  useOnClickOutside(closeAccordion, () => setAccordionOpen(false));

  return(
    <>
      <AccordionButton 
        onClick={showAccordion}
        ref={closeAccordion}
        accordionOpen={accordionOpen}
        >
       <SubHeadline FaqTitle>{props.title}</SubHeadline> 
        <AccordionIcon
        accordionOpen={accordionOpen}
        >
          <div/>
          <div/>
        </AccordionIcon>
      </AccordionButton>
      <AccordionTextWrapper
        accordionOpen={accordionOpen}
      >
      <SubTitle AccordionTitle>{props.subtitle}</SubTitle>
        <Body FaqAnswer>{props.answer}</Body>
      <SubTitle AccordionTitle>{props.subtitletwo}</SubTitle>
        <Body FaqAnswer>{props.answertwo}</Body>
      </AccordionTextWrapper>
    </>
  )
}