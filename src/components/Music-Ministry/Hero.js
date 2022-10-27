import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
//Styles
import { 
  HeroImage, 
  HeroSection, 
  HeroSvg,
  } from '../../styles/HeroSection';
import { ImageWrapper } from '../../styles';
//Svg
import MusicHeroSvg from "../../Svg/assets/Hero-Curve.svg";



export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Music-Ministry/Hero.jpg"
          alt=""
          layout='fullWidth'
          quality={50}
          placeholder="blurred"
          className='heroBg'
          formats={['auto','webp']}
        />
      </HeroImage>
      <ImageWrapper
        R="1/2"
        C="6/10"
        TC="3/9"
        MC="2/6"
        JS="center"
        AS="center"
      >
        <StaticImage
          src="../../images/Music-Ministry/Music-Logo.png"
          alt=""
          layout='fullWidth'
          quality={50}
          placeholder="blurred"
        />
      </ImageWrapper>
      <HeroSvg Top>
        <MusicHeroSvg/>
      </HeroSvg>
    </HeroSection>
  )
}