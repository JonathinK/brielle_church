import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
//Svg Import
import PreschoolHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg";

import { 
  HeroImage, 
  HeroSection, 
  HeroSvg, 
  HeroTitleContainer,
  PageTitle } from '../../styles/HeroSection';


export const Hero = () => {
  
  return(
     <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Worship-Service/Hero.jpg"
          layout='fullWidth'
          placeholder='blurred'
          formats={['auto','jpg','webp']}
          quality={50}
          alt='Interior Worship Hall'
          className='heroBg'
        />
      </HeroImage>
      <HeroTitleContainer CenterTitle>
        <PageTitle>Worship Service</PageTitle>
      </HeroTitleContainer>
      <HeroSvg
        Top
      ><PreschoolHeroSvg/></HeroSvg>
    </HeroSection>
  )
}