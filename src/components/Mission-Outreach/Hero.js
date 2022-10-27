import React from 'react';

import { StaticImage } from "gatsby-plugin-image";
//Styles
import { 
  HeroImage, 
  HeroSection, 
  HeroSvg,
  HeroTitleContainer,
  PageTitle } from '../../styles/HeroSection';

import StaffHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg"

export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Missions-Outreach/Hero.jpg"
          alt=""
          layout='fullWidth'
          loading="eager"
          quality={50}
          placeholder="blurred"
          formats={['auto','webp']}
          className='heroBg'
        />
      </HeroImage>
      <HeroTitleContainer LeftAlign>
        <PageTitle>Missions & Outreach</PageTitle>
      </HeroTitleContainer>
      <HeroSvg Top>
        <StaffHeroSvg/>
      </HeroSvg>
    </HeroSection>
  )
}