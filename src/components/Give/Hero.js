import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
//Styles
import { 
  HeroImage, 
  HeroSection, 
  HeroSvg, 
  HeroTitleContainer, 
  PageTitle } from '../../styles/HeroSection';
//Svg
import GiveSvg from "../../Svg/assets/Alt-Hero-Curve.svg"

export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
      <StaticImage
        src="../../images/Give/Hero.jpg"
        alt=""
        formats={['auto','webp']}
        quality={50}
        placeholder="blurred"
        layout='fullWidth'
        className='heroBg'
      />
      </HeroImage>
      <HeroTitleContainer CenterTitle>
        <PageTitle>Giving</PageTitle>
      </HeroTitleContainer>
      <HeroSvg Top><GiveSvg/></HeroSvg>
    </HeroSection>
  )
}
