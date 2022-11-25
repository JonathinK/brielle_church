import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
//Styles
import { 
  Headline, 
  ImageWrapper, 
  Section, 
  TextWrapper,
  Body, 
  SvgWrapper } from '../../styles';
//Svg
import MusicSvg from "../../Svg/assets/Divider-Wave.svg"

export const IntroSection = (props) => {
  return(
    <Section SectionPadding>
      <SvgWrapper
        R="2/3"
        C="1/15"
        TR="3/4"
        TC="1/11"
        MC="1/7"
        RotateX
        StaffSvg
      >
        <MusicSvg/>
      </SvgWrapper>
      <SvgWrapper
        R="3/4"
        C="1/15"
        TR="5/6"
        TC="1/11"
        MC="1/7"
        Rotate
        StaffSvg
      >
        <MusicSvg/>
      </SvgWrapper>
      <ImageWrapper
        R="1/2"
        C="3/7"
        TC="3/9"
        MC="2/6"
        Shadow
      >
        <GatsbyImage
          image={props.imagedata}
        />
      </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="8/13"
        TR="2/3"
        TC="3/9"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>
          Giving through her gifts
        </Headline>
        <Body>
          Our Director of Music and Liturgical Arts, Dawne, has created a wonderful, safe, and joy-filled environment for everyone that’s involved or interested in our programs. Our music ministry is a diverse group of ages, background, experience and musical knowledge as young as 3 years old through the young at heart in their late 80s.  Our musical door welcomes everyone! Experience or music reading not required, just a love of music and Jesus.
        </Body>
      </TextWrapper>
      <TextWrapper
        R="2/4"
        C="3/7"
        TR="4/6"
        TC="3/9"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>What to expect?</Headline>
        <Body>
          Each choir rehearsal encompasses the art of learning some music theory (our roadmap), making beautiful vocal harmony (our goal) and sharing laughter and love with each other (the best part!). We are blessed to have our choirs share their gifts at our liturgies regularly.
        </Body>
      </TextWrapper>
      <ImageWrapper
        R="2/4"
        C="9/12"
        TR="3/4"
        TC="4/8"
        MC="2/6"
        JS="center"
        AS="center"
        MusicNote
      >
        <GatsbyImage image={props.expectImageData}/>
      </ImageWrapper>
    </Section>
  )
}