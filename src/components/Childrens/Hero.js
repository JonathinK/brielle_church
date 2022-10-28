import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import { HeroImage, HeroSection, HeroSvg,HeroTitleContainer,PageTitle} from '../../styles/HeroSection';
import ChildrenSvg from "../../Svg/assets/Alt-Hero-Curve.svg";

export const Hero = () => {

  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Childrens/Hero.jpg"
          alt=""
          className='heroBg'
          formats={['auto','webp']}
          placeholder="blurred"
          layout='fullWidth'
          quality={50}
          
        />
      </HeroImage>
      <HeroTitleContainer>
        <PageTitle>Children's Ministry</PageTitle>
      </HeroTitleContainer>
     <HeroSvg Top><ChildrenSvg/></HeroSvg>
    </HeroSection>
  )
}