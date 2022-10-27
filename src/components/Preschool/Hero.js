import React from 'react';
import { StaticImage} from 'gatsby-plugin-image';
//Svg Import
import PreschoolHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg";
//Styles
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
          src="../../images/Preschool/Hero.jpg"
          alt="Preschool Hero Image"
          formats={['auto','webp']}
          placeholder="blurred"
          layout='fullWidth'
          quality={50}
          loading="eager"
          className='heroBg'
        />
      </HeroImage>
      <HeroTitleContainer CenterTitle>
        <PageTitle>Preschool</PageTitle>
      </HeroTitleContainer>
      <HeroSvg
        Top
      >
      <PreschoolHeroSvg/>
      </HeroSvg>
    </HeroSection>
  )
}