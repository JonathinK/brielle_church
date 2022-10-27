import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
//Svg Import
import StaffHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg"
//Styles
import { 
  HeroImage, 
  HeroSection, 
  HeroSvg,
  HeroTitleContainer,
  PageTitle} from '../../styles/HeroSection';

export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Our-Staff/Hero.jpg"
          alt="Staff Hero Image"
          layout='fullWidth'
          quality={50}
          placeholder="blurred"
          className='heroBg'
          loading="eager"
          formats={['auto','webp']}
        />
      </HeroImage>
      <HeroTitleContainer CenterTitle>
        <PageTitle>Our Staff</PageTitle>
      </HeroTitleContainer>
      <HeroSvg Top>
        <StaffHeroSvg/>
      </HeroSvg>
    </HeroSection>
  )
}