import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
//Svg Import
import InclusiveSvg from "../../Svg/assets/Alt-Hero-Curve.svg";
//Style Imports
import { 
  AltPageTitleText, 
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
          src="../../images/Inclusivity/Hero.jpg"
          alt=""
          layout='fullWidth'
          placeholder='blurred'
          formats={['jpg','webp','auto']}
          quality={50}
          className="heroBg"
       />
      </HeroImage>
      <HeroTitleContainer LeftAlign>
        <PageTitle TextLeft>Inclusivity Message</PageTitle>
        <AltPageTitleText TextLeft> <strong>At this church God does not Judge you, God Loves you for who you are.</strong></AltPageTitleText>
      </HeroTitleContainer>
      <HeroSvg Top><InclusiveSvg/></HeroSvg>
    </HeroSection>
  )
}