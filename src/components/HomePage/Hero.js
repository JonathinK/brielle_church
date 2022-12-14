import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { 
  Button, 
  OutsideLink, 
  TextWrapper, 
  SvgWrapper, 
  Headline, 
  Body} from "../../styles";
import { HeroSection, HeroImage } from "../../styles/HeroSection";
import { Subtitle } from "../../styles/pagehero";
import HeroWave from "../../Svg/assets/Alt-Hero-Curve.svg"
import CenterSvg from "../../Svg/assets/Homepage-Hero-Svg.svg";



export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage className="homepage_hero">
        <StaticImage
          src="../../images/Homepage/HeroAlt.jpg"
          layout="fullWidth"
          alt="Front of Brielle Church"
          quality={60}
          formats={['auto','webp','jpg']}
          className="heroBg"
          loading="eager"
        />
      </HeroImage>
      <TextWrapper
        R="1/4"
        C="3/13"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="center"
        CenteredWrapper
        className="hero_wrapper"
      >
      <SvgWrapper
        HeroSvg
      >
        <CenterSvg/>
      </SvgWrapper> 
        <Headline WhiteColor>Community | Family | God</Headline>
        <Button WhiteButton><OutsideLink href="https://m.facebook.com/Thechurchinbrielle/?mibextid=LQQJ4d">Facebook Live</OutsideLink></Button>
      </TextWrapper>
      <SvgWrapper
        R="3/4"
        C="1/15"
        TC="1/12"
        MC="1/7"
        HeroSvg
        className="homepage"
      >
        <HeroWave/>
      </SvgWrapper>
    </HeroSection>
  )
}
