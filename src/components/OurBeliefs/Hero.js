import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
//Svg Import
import BeliefsHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg";
//Style Imports
import { 
  HeroSection, 
  HeroImage, 
  HeroSvg, 
  HeroTitleContainer, 
  PageTitle} from "../../styles/HeroSection";


export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Our-Beliefs/Hero.jpg"
          alt="Our Beliefs Image"
          layout='fullWidth'
          placeholder='blurred'
          loading='eager'
          quality={50}
          formats={['auto','jpg','webp']}
          className="heroBg"
        />
      </HeroImage>
        <HeroTitleContainer>
          <PageTitle>Our Beliefs</PageTitle>
        </HeroTitleContainer>
      <HeroSvg Top><BeliefsHeroSvg/></HeroSvg>
    </HeroSection>
  )
}