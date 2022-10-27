import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
//Svg Import
import PreschoolWave from "../../Svg/assets/Divider-Wave.svg";
//Styles
import { 
  Section, 
  SvgWrapper,
  TextWrapper, 
  Headline,
  Body,
  ImageWrapper } from '../../styles';

export const ExpectationSection = () => {
  return(
    <Section Preschool>
    <SvgWrapper
        R="1/2"
        C="1/15"
        TR="1/2"
        TC="1/11" 
        MR="1/2"
        MC="1/8"
        Rotate     
        Flip
        >
    <PreschoolWave/>
    </SvgWrapper>
      <TextWrapper
        R="1/2"
        C="8/14"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
      <Headline>
        What to expect at our preschool
      </Headline>
      <Body>
      Our curriculum is a unique blend of play-based learning and multi-sensory instruction. Research shows that a multi-sensory education is highly effective in the acquisition of new concepts.
      </Body>
      </TextWrapper>
      <ImageWrapper
        R="1/2"
        C="2/7"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        Shadow
        PreschoolImages
      >
        <StaticImage 
          src="../../images/Preschool/Playground.jpg"
          layout="fullWidth"
          alt=""
          quality={100}
          placeholder="blurred"
          formats={['auto','webp']}
          loading="lazy"
        />
      </ImageWrapper>
    </Section>
  )
} 