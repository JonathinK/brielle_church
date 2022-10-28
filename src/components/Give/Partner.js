import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { 
  Body, 
  Headline, 
  ImageWrapper, 
  LargeHeadline, 
  Section, 
  TextWrapper } from '../../styles';

export const PartnerSection = (props) => {
  return(
    <Section SectionPadding>
      <ImageWrapper
        R="1/2"
        C="3/9"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        Shadow
      >
        <GatsbyImage image={props.imagedata}/>
      </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="10/14"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <LargeHeadline>Partner with <strong>TCIB</strong> & make a <strong>Difference</strong></LargeHeadline>
      </TextWrapper>
      <TextWrapper
        R="2/3"
        C="3/9"
        TR="3/4"
        TC="3/9"
        MR="3/4"
        MC="2/6"
        LeftAlignWrapper
      >
        <Headline>Why do we give?</Headline>
        <Body>
          We give our <strong>Time</strong> to aid those in our community and within our church. Giving back by ways of service is one of the many things that can be done. <strong>Donations</strong> can be a form of giving also. While these aren't necessary to be part of our family, we do appreciate them. There are many things that a church can do and donating in many forms helps us achieve them to better our communities & find spiritual wellness. 
        </Body>
      </TextWrapper>
    </Section>
  )
} 